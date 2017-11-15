const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")
const nImages = 4
let currentImage = 1

function newImg(direction) {
  if (direction === "next") {
    currentImage += 1
    if (currentImage > nImages) {
      currentImage = 1
    }
  } else if (direction === "prev") {
    currentImage -= 1
    if (currentImage == 0) {
      currentImage = nImages
    }
  }
  const imgTag = document.getElementsByTagName("img")[0]
  imgTag.src = "img/" + currentImage + ".jpg"
}

nextBtn.addEventListener("click", function() {
  newImg("next")
})

prevBtn.addEventListener("click", function() {
  newImg("prev")
})

