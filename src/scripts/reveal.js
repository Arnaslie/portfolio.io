import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

// ─── Staggered text reveal, one timeline per page ───────────────────────────
// LESSON: ScrollTrigger can't find these pages by their position. The track
// slides them in with a CSS transform, so in document terms they never move.
// Instead each trigger gets a numeric scroll range: page i rests at
// i·pageStep(), and it counts as "the current page" within half a turn of it.
// Entering the range plays its timeline; leaving it rewinds it (twice as fast),
// so the text is ready to reveal again when you come back.
export function initReveal({ lenis, pages, pageStep }) {
  // Lenis owns the scroll; tell ScrollTrigger on every Lenis tick so both
  // read the same position in the same frame.
  lenis.on('scroll', ScrollTrigger.update);

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    pages.forEach((page, i) => {
      const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });

      // Chapter label ("Project 01") slides in first.
      const chapter = page.querySelector('.chapter');
      if (chapter) tl.from(chapter, { autoAlpha: 0, x: 24, duration: 0.5 });

      // Heading: letters rise out of a clipping mask, one after another.
      // LESSON: the cover h1 paints its gradient with background-clip: text,
      // which only reaches text inside the h1 itself. Wrapping each letter in
      // its own transformed box leaves them invisible, so gradient headings
      // rise as one word through a clip-path wipe instead of being split.
      const heading = page.querySelector('h1, h2');
      const gradientText = heading && getComputedStyle(heading).backgroundClip === 'text';
      if (gradientText) {
        tl.from(heading, { clipPath: 'inset(0% 0% 100% 0%)', yPercent: 30, duration: 1.1, ease: 'power4.out' }, 0);
      } else if (heading) {
        const split = SplitText.create(heading, { type: 'chars', mask: 'chars' });
        tl.from(split.chars, { yPercent: 110, duration: 0.7, stagger: 0.035 }, chapter ? '-=0.3' : 0);
      }

      // Body copy: words fade up in a quick ripple. Words (not lines) re-wrap
      // on their own when the window resizes, so nothing needs re-splitting.
      page.querySelectorAll('.panel--tone p:not(.scroll-hint)').forEach((p) => {
        const split = SplitText.create(p, { type: 'words' });
        tl.from(split.words, { autoAlpha: 0, y: 12, duration: 0.5, stagger: 0.012 }, '-=0.45');
      });

      // Links last, one by one.
      const links = page.querySelectorAll('.panel-link');
      if (links.length) tl.from(links, { autoAlpha: 0, y: 10, duration: 0.45, stagger: 0.1 }, '-=0.3');

      ScrollTrigger.create({
        start: () => (i - 0.5) * pageStep(),
        end: () => (i + 0.5) * pageStep(),
        invalidateOnRefresh: true,
        onToggle: (self) => (self.isActive ? tl.timeScale(1).play() : tl.timeScale(2).reverse()),
      });
    });
  });

  // pageStep() depends on the spacer height, so re-measure after resizes.
  return () => ScrollTrigger.refresh();
}
