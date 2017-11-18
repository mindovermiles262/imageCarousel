const image = document.getElementById("currentImage");
let autoSlide = startAutoSlide();

Array.from(document.getElementsByTagName("button"))
  .forEach(function (button) {
    button.addEventListener("click", function () {
      const thisButton = this;
      clearInterval(autoSlide);
      slide(thisButton.id);
      autoSlide = startAutoSlide();
    });
  });

function startAutoSlide() {
  return setInterval(function () {
    slide("right");
  }, 5000);
}

function slide(direction) {
  image.className = `slide${direction}`;
  setTimeout(function () {
    newImage(direction);
  }, 150);
}

function newImage(direction) {
  const numberOfImages = 4;
  let currentImage = +image.src.match(/(\d+)(?!.*\d)/)[0];
  if (direction === "right") {
    currentImage = (currentImage >= numberOfImages) ? 1 : currentImage + 1;
  }
  else if (direction === "left") {
    currentImage = (currentImage === 1) ? numberOfImages : currentImage - 1;
  }
  image.src = `img/${currentImage}.jpg`;
  image.className = "";
}