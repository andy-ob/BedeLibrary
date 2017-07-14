/**
 * Handle pre loading of images
**/

const imageLoader = () => {
  const images = document.querySelectorAll('[data-preload]');

  if (images.length) {
    for (const [index, img] of images.entries()) {

      img.addEventListener('load', () => {
        img.nextElementSibling.classList.add('loaded');
      });
    }
  }
};

export default imageLoader;
