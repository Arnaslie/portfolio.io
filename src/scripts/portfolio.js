import * as THREE from 'three';
import Lenis from 'lenis';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import starData from '../data/stars.json';
import { initReveal } from './reveal.js';

// ─── DOM: the book ───────────────────────────────────────────────────────────
const track = document.getElementById('track');
const pages = [...track.querySelectorAll('.page')];
const PAGE_COUNT = pages.length;
const LAST = PAGE_COUNT - 1; // number of page-turns between cover and back cover

// Let CSS size the track + spacer from the real page count.
document.documentElement.style.setProperty('--pages', String(PAGE_COUNT));
const pad2 = (n) => String(n).padStart(2, '0');
document.getElementById('folio-total').textContent = pad2(PAGE_COUNT);
const folioCurrent = document.getElementById('folio-current');

// One tick per page. The list is styled `direction: rtl`, so tick 1 lands on
// the right, the same side page 1 sits on.
const ticksEl = document.getElementById('folio-ticks');
const ticks = pages.map(() => ticksEl.appendChild(document.createElement('li')));
const btnNext = document.getElementById('pager-next');
const btnPrev = document.getElementById('pager-prev');

// ─── Renderer ────────────────────────────────────────────────────────────────
const canvas = document.getElementById('webgl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// ─── Scene ───────────────────────────────────────────────────────────────────
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x080808, 15, 40);

// ─── Camera ──────────────────────────────────────────────────────────────────
const CAM_Z = 5;
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, CAM_Z);
scene.add(camera);

// ─── World ↔ screen mapping ─────────────────────────────────────────────────
// LESSON: how big is the screen in world units at a given depth?
// A perspective camera's visible height at distance d is 2·d·tan(fov/2);
// width is that × aspect. If ONE page-turn moves the camera by exactly the
// visible width at z=0 (PAGE_W), then objects on the z=0 plane move across
// the screen at exactly the same speed as the DOM track — they look glued
// to their panels. Objects at z<0 move a little slower: free parallax depth.
function visibleSizeAt(z) {
  const dist = CAM_Z - z;
  const h = 2 * dist * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  return { w: h * camera.aspect, h };
}
let PAGE_W = visibleSizeAt(0).w;

// ─── Meshes: one per page, in reading order ─────────────────────────────────
// `size` = the mesh's rough diameter in its own units, used to fit it to
// its art panel. `z` = depth (parallax).
const actors = [];
function addActor(object, { size, z = 0 }) {
  scene.add(object);
  actors.push({ object, size, z });
  return object;
}

// Every mesh is a fat wireframe. LineMaterial ignores lights, so the scene
// needs none. EdgesGeometry draws every edge sharper than 1°, so keep
// geometry low-poly or the outline turns into a mesh of lines.
const lineMats = [];
function wireLines(geometry, color) {
  const geo = new LineSegmentsGeometry().fromEdgesGeometry(new THREE.EdgesGeometry(geometry));
  const mat = new LineMaterial({ color, linewidth: 3, resolution: new THREE.Vector2(window.innerWidth, window.innerHeight) });
  lineMats.push(mat);
  return new LineSegments2(geo, mat);
}
function wireActor(geometry, color, size, z) {
  return addActor(wireLines(geometry, color), { size, z });
}

// 1 · Hero — Latin cross: short top arm, long foot, crossbar set high.
const w = 0.3;                          // half the beam thickness
const top = 1.0, foot = -1.8, arm = 0.9; // beam ends
const bar = 0.4;                        // crossbar's centre height
const crossShape = new THREE.Shape();
crossShape.moveTo(-w,   top);
crossShape.lineTo( w,   top);
crossShape.lineTo( w,   bar + w);
crossShape.lineTo( arm, bar + w);
crossShape.lineTo( arm, bar - w);
crossShape.lineTo( w,   bar - w);
crossShape.lineTo( w,   foot);
crossShape.lineTo(-w,   foot);
crossShape.lineTo(-w,   bar - w);
crossShape.lineTo(-arm, bar - w);
crossShape.lineTo(-arm, bar + w);
crossShape.lineTo(-w,   bar + w);
crossShape.closePath();
const crossGeo = new THREE.ExtrudeGeometry(crossShape, { depth: 0.4, bevelEnabled: false });
crossGeo.center(); // so it spins around its middle, not a corner
const cross = wireActor(crossGeo, 0x6366f1, 2.8, 0);

// 2 · About — 'i' (stem + dot)
const iColor = 0x34d399;
const iGroup = new THREE.Group();
const stem = wireLines(new THREE.BoxGeometry(0.45, 2.2, 0.45), iColor);
const dot = wireLines(new THREE.IcosahedronGeometry(0.38, 1), iColor);
stem.position.y = -0.3;
dot.position.y = 1.3;
iGroup.add(stem, dot);
addActor(iGroup, { size: 3.2, z: -1 });

// 3–5 · Projects — one per project
const icosa  = wireActor(new THREE.IcosahedronGeometry(1.3, 0), 0x22d3ee, 2.6, -1); // Builders Marketplace
const dodeca = wireActor(new THREE.DodecahedronGeometry(1.3, 0), 0xdc143c, 2.6, -1); // Quad Tutor (crimson)
const tetra  = wireActor(new THREE.TetrahedronGeometry(1.5, 0), 0x5b6b4a, 2.6, -1);  // Throttleride.global (Kawasaki Metallic Matte Covert Green, approx.)

// 6 · Contact — octahedron
const octa = wireActor(new THREE.OctahedronGeometry(1.3), 0xa78bfa, 2.6, 0);

if (actors.length !== PAGE_COUNT) {
  console.warn(`[manga] ${PAGE_COUNT} pages but ${actors.length} meshes — some pages will have an empty art panel.`);
}

// ─── Pin each mesh to its page's art panel ──────────────────────────────────
// LESSON: DOM rect → normalized device coords → world position.
// We measure the art panel inside its page (offsetLeft/Top ignore the
// track's transform, which is what we want: the *resting* layout), convert
// its center to NDC (-1..1), then scale by the visible size at the mesh's
// depth. Page i's camera sits at x = -i·PAGE_W, so add that offset.
function layoutActors() {
  PAGE_W = visibleSizeAt(0).w;
  const vw = window.innerWidth, vh = window.innerHeight;

  actors.forEach((actor, i) => {
    const art = pages[i]?.querySelector('[data-art]');
    if (!art) { actor.object.visible = false; return; }

    const cx = art.offsetLeft + art.offsetWidth / 2;
    const cy = art.offsetTop + art.offsetHeight / 2;
    const ndcX = (cx / vw) * 2 - 1;
    const ndcY = -((cy / vh) * 2 - 1); // DOM y grows down, world y grows up

    const view = visibleSizeAt(actor.z);
    // At rest on page i the CAMERA is at x = -i·PAGE_W, so place the mesh
    // relative to that. Its NDC offset is scaled by the view width at the
    // mesh's own depth. Mid-turn, deeper meshes drift a bit vs. the panel —
    // that's the parallax — and land exactly back in the window at rest.
    const pageX = -i * PAGE_W;
    actor.object.position.set(pageX + ndcX * view.w / 2, ndcY * view.h / 2, actor.z);

    // Fit: mesh diameter ≈ 55% of the panel's shorter side, in world units.
    const panelWorld = Math.min(art.offsetWidth / vw * view.w, art.offsetHeight / vh * view.h);
    actor.object.scale.setScalar((panelWorld * 0.55) / actor.size);
  });
}

// ─── Sky: the real night sky, time-lapsed ────────────────────────────────────
// 5,044 naked-eye stars (src/data/stars.json, built by `npm run stars`) on a
// distant sphere. The sky opens at the visitor's actual sidereal time, then
// runs fast so the rotation is visible, and every page-turn adds a few hours.
//
// LESSON: frames. Inner group = equatorial frame (celestial pole on +y, each
// star at angle RA around it). Spinning it about y by (90° − LST) is Earth's
// rotation: a star with RA = LST lands on the meridian (−z, due south, where
// the camera looks). The outer group tilts that pole up to altitude = latitude
// toward north (+z), giving the horizon frame: +y zenith, −x east, +x west.
const SKY_RADIUS = 60;          // inside the camera's far plane (100)
const SKY_TIME_SCALE = matchMedia('(prefers-reduced-motion: reduce)').matches
  ? 1                           // honest real time for reduced motion
  : 360;                        // 1 real second = 6 sky minutes = 1.5°
const SKY_HOURS_PER_PAGE = 2;   // each page-turn sweeps 30° of sky
const SKY_LAT = 45;             // no geolocation prompt: a mid-northern sky…
const SKY_LON = (-new Date().getTimezoneOffset() / 60) * 15; // …at the visitor's timezone longitude
const skyEpoch = Date.now();

// Greenwich mean sidereal time → local sidereal time, in radians.
function localSiderealTime(ms) {
  const daysSinceJ2000 = ms / 86400000 + 2440587.5 - 2451545.0;
  const deg = 280.46061837 + 360.98564736629 * daysSinceJ2000 + SKY_LON;
  return THREE.MathUtils.degToRad(((deg % 360) + 360) % 360);
}

// B−V colour index → tint: blue-white hot stars to orange cool ones,
// kept pale so the sky reads as white with a hint of colour.
const STAR_HOT = new THREE.Color(0xaabfff);
const STAR_MID = new THREE.Color(0xfff6ec);
const STAR_COOL = new THREE.Color(0xffc98a);
function starColor(bv, out) {
  return bv < 0.6
    ? out.copy(STAR_HOT).lerp(STAR_MID, THREE.MathUtils.clamp((bv + 0.3) / 0.9, 0, 1))
    : out.copy(STAR_MID).lerp(STAR_COOL, THREE.MathUtils.clamp((bv - 0.6) / 1.0, 0, 1));
}

const starCount = starData.length / 4;
const starPos = new Float32Array(starCount * 3);
const starCol = new Float32Array(starCount * 3);
const starSize = new Float32Array(starCount);
const starAlpha = new Float32Array(starCount);
const tint = new THREE.Color();
for (let i = 0; i < starCount; i++) {
  const ra = THREE.MathUtils.degToRad(starData[i * 4]);
  const dec = THREE.MathUtils.degToRad(starData[i * 4 + 1]);
  const mag = starData[i * 4 + 2];
  starPos[i * 3]     = SKY_RADIUS * Math.cos(dec) * Math.cos(ra);
  starPos[i * 3 + 1] = SKY_RADIUS * Math.sin(dec);
  starPos[i * 3 + 2] = -SKY_RADIUS * Math.cos(dec) * Math.sin(ra);
  starColor(starData[i * 4 + 3], tint).toArray(starCol, i * 3);
  // Magnitude is logarithmic and inverted: Sirius (−1.5) big, mag 6 a speck.
  starSize[i] = 1.1 + Math.max(0, 6 - mag) * 0.55;
  starAlpha[i] = THREE.MathUtils.clamp(0.3 + (6 - mag) * 0.12, 0.3, 1);
}
const starGeo = new THREE.BufferGeometry();
starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
starGeo.setAttribute('color', new THREE.BufferAttribute(starCol, 3));
starGeo.setAttribute('size', new THREE.BufferAttribute(starSize, 1));
starGeo.setAttribute('alpha', new THREE.BufferAttribute(starAlpha, 1));
const starMat = new THREE.ShaderMaterial({
  uniforms: { uPixelRatio: { value: renderer.getPixelRatio() } },
  vertexShader: /* glsl */ `
    attribute float size;
    attribute float alpha;
    varying vec3 vColor;
    varying float vAlpha;
    uniform float uPixelRatio;
    void main() {
      vColor = color;
      vAlpha = alpha;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = size * uPixelRatio; // fixed pixels: stars don't scale with distance
    }`,
  fragmentShader: /* glsl */ `
    varying vec3 vColor;
    varying float vAlpha;
    void main() {
      float d = length(gl_PointCoord - 0.5);
      float a = smoothstep(0.5, 0.15, d) * vAlpha; // soft round disc
      if (a < 0.01) discard;
      gl_FragColor = vec4(vColor, a);
    }`,
  vertexColors: true,
  transparent: true,
  depthWrite: false,
});
const skyTilt = new THREE.Group();
skyTilt.rotation.x = THREE.MathUtils.degToRad(90 - SKY_LAT);
const skySpin = new THREE.Group();
const stars = new THREE.Points(starGeo, starMat);
stars.renderOrder = -1; // backdrop: draw before the meshes
skySpin.add(stars);
skyTilt.add(skySpin);
scene.add(skyTilt);

function updateSky(elapsedSec, pagesTravelled) {
  // The sky is infinitely far: it follows the camera's position (so panning
  // never slides it) and only rotates.
  skyTilt.position.copy(camera.position);
  const simMs = skyEpoch + (elapsedSec * SKY_TIME_SCALE + pagesTravelled * SKY_HOURS_PER_PAGE * 3600) * 1000;
  skySpin.rotation.y = Math.PI / 2 - localSiderealTime(simMs);
}

// ─── Particles: near dust, for parallax depth as pages turn ─────────────────
const particleCount = 800;
const positions = new Float32Array(particleCount * 3);
const span = PAGE_W * (PAGE_COUNT + 2);
for (let i = 0; i < particleCount; i++) {
  positions[i * 3]     = PAGE_W - Math.random() * span; // from right of cover to past back cover
  positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 12 - 3;
}
const particleGeo = new THREE.BufferGeometry();
particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
scene.add(new THREE.Points(
  particleGeo,
  new THREE.PointsMaterial({ color: 0xffffff, size: 0.025, sizeAttenuation: true })
));

// ─── Mouse parallax ──────────────────────────────────────────────────────────
const mouse = { x: 0, y: 0 };
const mouseSmoothed = { x: 0, y: 0 };
window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
  mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
});

// ─── Lenis: smooth vertical scroll, read as horizontal progress ──────────────
const lenis = new Lenis({
  lerp: 0.085,                 // lower = floatier glide, higher = snappier
  gestureOrientation: 'both',  // accept sideways trackpad swipes too…
  // …but flip them. LESSON: Lenis calls virtualScroll(data) BEFORE it reads
  // data.deltaX, so mutating it here rewrites the gesture. Swiping your
  // fingers right→left (deltaX > 0) should move you FORWARD, like flicking a
  // manga page — forward is +scroll, so negate deltaX.
  virtualScroll: (data) => {
    // Free wheel/trackpad input takes over from any button/key page-turn.
    navTarget = null;
    data.deltaX = -data.deltaX;
    return true;
  },
});

// Lenis.progress is scroll/limit, but returns 1 when limit is 0 (before the
// spacer has height). That would throw you to the back cover on first paint,
// so compute it ourselves with a 0 fallback.
const progress = () => (lenis.limit > 0 ? lenis.scroll / lenis.limit : 0);
const pageStep = () => lenis.limit / LAST;           // scroll px per page-turn
const refreshReveal = initReveal({ lenis, pages, pageStep });

// ─── Continuous glide that settles onto the nearest page ────────────────────
// No hard snapping: Lenis glides freely. Once input stops (no scroll event
// for SETTLE_MS — which includes the tail of Lenis' own smoothing), ease to
// the nearest page. Any new wheel/touch input interrupts the settle.
const SETTLE_MS = 140;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
let settleTimer = 0;

function nearestPageIndex() {
  return Math.round(progress() * LAST);
}

function settle() {
  const target = nearestPageIndex() * pageStep();
  if (Math.abs(target - lenis.scroll) < 1) return; // already resting on a page
  lenis.scrollTo(target, { duration: 0.8, easing: easeOutCubic });
}

lenis.on('scroll', () => {
  clearTimeout(settleTimer);
  settleTimer = setTimeout(settle, SETTLE_MS);
});

// LESSON: where does "one page on" start from? If it starts from the page
// we're *visually nearest* to, two quick key presses break: the second press
// lands while the camera is still only ~20% into the first turn, rounds back
// to the old page, and you go one page instead of two. So remember the page
// we're heading to and step from THAT while a turn is in flight.
let navTarget = null;

function goToPage(index) {
  const i = THREE.MathUtils.clamp(index, 0, LAST);
  navTarget = i;
  lenis.scrollTo(i * pageStep(), {
    duration: 1.1,
    easing: easeOutCubic,
    onComplete: () => { if (navTarget === i) navTarget = null; },
  });
}

// +1 = read on (next page, arrives from the left), -1 = go back.
function turn(dir) {
  const from = navTarget ?? nearestPageIndex();
  goToPage(from + dir);
}

// ─── Keyboard ───────────────────────────────────────────────────────────────
// Manga direction: ← reads on, → goes back. PageDown / Space / ↓ = next page,
// PageUp / Shift+Space / ↑ = previous, each exactly one page instead of the
// browser's native "scroll ~87% of a screen".
const NEXT_KEYS = new Set(['ArrowLeft', 'ArrowDown', 'PageDown']);
const PREV_KEYS = new Set(['ArrowRight', 'ArrowUp', 'PageUp']);

window.addEventListener('keydown', (e) => {
  if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return; // leave Cmd+← (history) etc. alone
  const el = e.target instanceof HTMLElement ? e.target : null;
  if (el?.closest('input, textarea, select, [contenteditable]')) return;

  let dir = 0;
  if (NEXT_KEYS.has(e.key)) dir = 1;
  else if (PREV_KEYS.has(e.key)) dir = -1;
  else if (e.key === ' ') {
    if (el?.closest('button, a')) return; // Space on a focused button = click it, not scroll
    dir = e.shiftKey ? -1 : 1;
  }
  else if (e.key === 'Home') { e.preventDefault(); goToPage(0); return; }
  else if (e.key === 'End')  { e.preventDefault(); goToPage(LAST); return; }
  if (!dir) return;

  e.preventDefault();
  turn(dir);
});

// ─── On-screen buttons ──────────────────────────────────────────────────────
btnNext.addEventListener('click', () => turn(1));
btnPrev.addEventListener('click', () => turn(-1));

// ─── Touch: horizontal swipe = one page ─────────────────────────────────────
// Vertical touch-scrolling still glides natively and settles onto a page.
// A clearly sideways swipe turns exactly one page. Direction follows the
// paper: the book slides RIGHT as you read on, so dragging your finger to the
// right pulls the next page in from the left (same as Lenis' trackpad flip).
const SWIPE_MIN_PX = 40;
let touchStart = null;

window.addEventListener('touchstart', (e) => {
  if (e.touches.length !== 1) { touchStart = null; return; }
  const t = e.touches[0];
  touchStart = { x: t.clientX, y: t.clientY };
}, { passive: true });

window.addEventListener('touchend', (e) => {
  if (!touchStart) return;
  const t = e.changedTouches[0];
  const dx = t.clientX - touchStart.x;
  const dy = t.clientY - touchStart.y;
  touchStart = null;
  if (Math.abs(dx) < SWIPE_MIN_PX || Math.abs(dx) < Math.abs(dy) * 1.2) return; // tap or vertical drag
  turn(dx > 0 ? 1 : -1);
}, { passive: true });

window.addEventListener('touchcancel', () => { touchStart = null; }, { passive: true });

// ─── Folio: counter, ticks, button states ───────────────────────────────────
function renderFolio(index) {
  folioCurrent.textContent = pad2(index + 1);
  ticks.forEach((tick, i) => {
    tick.classList.toggle('is-read', i < index);
    tick.classList.toggle('is-current', i === index);
  });
  btnNext.disabled = index >= LAST;
  btnPrev.disabled = index <= 0;
}

// Expose for poking around in DevTools: __manga.goToPage(3), __manga.turn(1)
window.__manga = { lenis, goToPage, turn, progress, PAGE_COUNT };

// ─── Render loop: ONE requestAnimationFrame drives everything ────────────────
// LESSON: Lenis, the DOM track and the camera all update in the same frame
// from the same progress value. Two separate rAF loops (or a lerp on the
// camera on top of Lenis' lerp) would let them drift apart, and meshes would
// visibly slide out of their panels mid-turn.
// THREE.Clock is deprecated in r184. Timer is driven by the rAF timestamp
// we already receive, so the mesh spin and Lenis share one time source.
const timer = new THREE.Timer();
let lastFolio = -1;

function animate(time) {
  lenis.raf(time);
  timer.update(time);

  const p = progress();
  const pagesTravelled = p * LAST; // 0 … 5, fractional mid-turn

  // DOM: slide the book right by N viewports → the next page enters from the left.
  track.style.transform = `translate3d(${pagesTravelled * 100}vw, 0, 0)`;

  // three.js: the camera walks down -x by the same number of page widths.
  mouseSmoothed.x += (mouse.x - mouseSmoothed.x) * 0.05;
  mouseSmoothed.y += (mouse.y - mouseSmoothed.y) * 0.05;
  camera.position.x = -pagesTravelled * PAGE_W + mouseSmoothed.x * 0.25;
  camera.position.y = mouseSmoothed.y * 0.2;

  const folio = Math.round(pagesTravelled);
  if (folio !== lastFolio) {
    renderFolio(folio);
    lastFolio = folio;
  }

  const t = timer.getElapsed();
  cross.rotation.y  = t * 0.5;
  cross.rotation.x  = Math.sin(t * 0.5) * 0.15; // stays upright, only sways
  iGroup.rotation.y = t * 0.4;
  iGroup.rotation.z = Math.sin(t * 0.5) * 0.15;
  icosa.rotation.x  = t * 0.5;
  icosa.rotation.y  = t * 0.3;
  dodeca.rotation.x = t * 0.35;
  dodeca.rotation.y = t * 0.45;
  tetra.rotation.x  = t * 0.4;
  tetra.rotation.z  = t * 0.25;
  octa.rotation.x   = t * 0.2;
  octa.rotation.y   = t * 0.45;
  updateSky(t, pagesTravelled);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

layoutActors();
requestAnimationFrame(animate);

// ─── Resize ──────────────────────────────────────────────────────────────────
// Keep the reader on the same page through a resize: remember which page we
// were on, re-measure, then jump (no animation) back to it.
window.addEventListener('resize', () => {
  const page = nearestPageIndex();
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  starMat.uniforms.uPixelRatio.value = renderer.getPixelRatio();
  lineMats.forEach((m) => m.resolution.set(window.innerWidth, window.innerHeight));
  lenis.resize();
  layoutActors();
  lenis.scrollTo(page * pageStep(), { immediate: true });
  refreshReveal();
});
