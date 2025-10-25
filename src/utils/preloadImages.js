// src/utils/preloadImages.js
export const preloadImages = (images) => {
  return Promise.all(
    images.map(
      (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        })
    )
  );
};
