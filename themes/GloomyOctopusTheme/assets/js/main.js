import PhotoSwipeLightbox from '/js/photoswipe/photoswipe-lightbox.esm.js';
import PhotoSwipeDynamicCaption from '/js/photoswipe/photoswipe-dynamic-caption-plugin.esm.js';

// Photoswipe lightbox
const lightbox = new PhotoSwipeLightbox({
  gallery: '#photoswipe5-gallery',
  children: 'a',
  pswpModule: () => import('/js/photoswipe/photoswipe.esm.js'),
  bgOpacity: 0.95,
  loop: false,
});

lightbox.init();

const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
  // Plugins options, for example:
  type: 'auto',
});
