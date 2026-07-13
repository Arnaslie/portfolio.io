import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

gsap.registerPlugin(ScrollTrigger);

// ─── Renderer ────────────────────────────────────────────────────────────────
const canvas = document.getElementById('webgl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// ─── Scene ───────────────────────────────────────────────────────────────────
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x080808, 15, 40);

// ─── Camera ──────────────────────────────────────────────────────────────────
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 5);
scene.add(camera);

// ─── Lights ──────────────────────────────────────────────────────────────────
scene.add(new THREE.AmbientLight(0xffffff, 0.3));

const purpleLight = new THREE.PointLight(0x6366f1, 4, 20);
purpleLight.position.set(3, 2, 4);
scene.add(purpleLight);

const pinkLight = new THREE.PointLight(0xec4899, 4, 20);
pinkLight.position.set(-3, -2, 2);
scene.add(pinkLight);

// ─── Section spacing ─────────────────────────────────────────────────────────
const SECTION_HEIGHT = 8;

// ─── Meshes (one per section) ────────────────────────────────────────────────
// Hero — cross
const arm = 1.2, w = 0.35;
const crossShape = new THREE.Shape();
crossShape.moveTo(-w,  arm);
crossShape.lineTo( w,  arm);
crossShape.lineTo( w,  w);
crossShape.lineTo( arm, w);
crossShape.lineTo( arm, -w);
crossShape.lineTo( w,  -w);
crossShape.lineTo( w,  -arm);
crossShape.lineTo(-w,  -arm);
crossShape.lineTo(-w,  -w);
crossShape.lineTo(-arm, -w);
crossShape.lineTo(-arm,  w);
crossShape.lineTo(-w,   w);
crossShape.closePath();
const cross = new THREE.Mesh(
  new THREE.ExtrudeGeometry(crossShape, { depth: 0.4, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.08, bevelSegments: 4 }),
  new THREE.MeshStandardMaterial({ color: 0x6366f1, emissive: 0x6366f1, emissiveIntensity: 0.6, roughness: 0.3, metalness: 0.5 })
);
cross.position.set(2.5, 0, 0);
scene.add(cross);

// About — 'i' (stem + dot)
const iMat = new THREE.MeshNormalMaterial();
const iGroup = new THREE.Group();
const stem = new THREE.Mesh(new THREE.BoxGeometry(0.45, 2.2, 0.45), iMat);
const dot = new THREE.Mesh(new THREE.SphereGeometry(0.38, 32, 32), iMat);
dot.position.y = 1.6;
iGroup.add(stem, dot);
iGroup.position.set(-2.5, -SECTION_HEIGHT, -1);
scene.add(iGroup);

// Projects — icosahedron (fat wireframe)
const icosaGeo = new THREE.IcosahedronGeometry(1.3, 0);
const edgesGeo = new LineSegmentsGeometry().fromEdgesGeometry(new THREE.EdgesGeometry(icosaGeo));
const edgesMat = new LineMaterial({ color: 0x22d3ee, linewidth: 3, resolution: new THREE.Vector2(window.innerWidth, window.innerHeight) });
const icosa = new LineSegments2(edgesGeo, edgesMat);
icosa.position.set(2.5, -SECTION_HEIGHT * 2, -1);
scene.add(icosa);

// Contact — octahedron
const octa = new THREE.Mesh(
  new THREE.OctahedronGeometry(1.3),
  new THREE.MeshStandardMaterial({ color: 0xa78bfa, emissive: 0xa78bfa, emissiveIntensity: 0.6, roughness: 0.2, metalness: 0.5 })
);
octa.position.set(0, -SECTION_HEIGHT * 3, 0);
scene.add(octa);

// ─── Particles ───────────────────────────────────────────────────────────────
const particleCount = 2500;
const positions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount; i++) {
  positions[i * 3]     = (Math.random() - 0.5) * 20;
  positions[i * 3 + 1] = (Math.random() - 0.5) * (SECTION_HEIGHT * 4 + 10) - SECTION_HEIGHT * 1.5;
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
window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
  mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
});

// ─── Scroll-driven camera ────────────────────────────────────────────────────
// GSAP animates this proxy; the render loop reads from it to avoid fighting with mouse parallax
const scrollProxy = { y: 0 };
gsap.to(scrollProxy, {
  y: -SECTION_HEIGHT * 3,
  ease: 'none',
  scrollTrigger: {
    trigger: '.sections-wrapper',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1.5,
  },
});

// ─── Render loop ─────────────────────────────────────────────────────────────
const clock = new THREE.Clock();

function animate() {
  const t = clock.getElapsedTime();

  cross.rotation.x = t * 0.3;
  cross.rotation.y = t * 0.5;
  iGroup.rotation.y    = t * 0.4;
  iGroup.rotation.z    = t * 0.1;
  icosa.rotation.x     = t * 0.5;
  icosa.rotation.y     = t * 0.3;
  octa.rotation.x      = t * 0.2;
  octa.rotation.y      = t * 0.45;

  // Smooth camera follow: scroll target + subtle mouse offset
  camera.position.y += (scrollProxy.y + mouse.y * 0.3 - camera.position.y) * 0.08;
  camera.position.x += (mouse.x * 0.4 - camera.position.x) * 0.05;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

// ─── Resize ──────────────────────────────────────────────────────────────────
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  edgesMat.resolution.set(window.innerWidth, window.innerHeight);
});
