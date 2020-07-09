import MobileMenu from './mobileMenu.js';
import RevealOnScroll from './revealOnScroll.js';
import StickyHeader from './stickyHeader.js';
import LazyLoading from './LazyLoading.js';

new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature'));
new RevealOnScroll(document.querySelectorAll('.testimonial'));
new StickyHeader();
new LazyLoading();