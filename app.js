
document.addEventListener("wheel", (event) => {
    const exhibitionGallery = document.getElementById("exhibition-gallery");
    if (event.deltaY !== 0) { //detects vertical scroll
      event.preventDefault();
      exhibitionGallery.scrollLeft += event.deltaY;
    }
  }, { passive: false });