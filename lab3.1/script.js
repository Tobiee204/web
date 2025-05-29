function filterImages(category) {
  const images = document.querySelectorAll(".gallery img");
  images.forEach(img => {
    if (category === 'all') {
      img.classList.remove("hide");
    } else {
      if (img.classList.contains(category)) {
        img.classList.remove("hide");
      } else {
        img.classList.add("hide");
      }
    }
  });
}
