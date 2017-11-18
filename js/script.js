const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")
const nImages = 4
let currentImage = 1

function newImg(direction) {
  if (direction === "next") {
    (currentImage >= nImages) ? (currentImage = 1) : (currentImage += 1)
  } else if (direction === "prev") {
    (currentImage == 1) ? (currentImage = nImages) : ( currentImage -= 1)
  }
  const imgTag = document.getElementsByTagName("img")[0]
  imgTag.src = "img/" + currentImage + ".jpg"
  imgTag.className = ""
}

nextBtn.addEventListener("click", function() {
  document.getElementsByTagName("img")[0].className += "slideRight"
  setTimeout(function() {
    newImg("next")
  }, 150)
})

prevBtn.addEventListener("click", function() {
  document.getElementsByTagName("img")[0].className += "slideLeft"  
  setTimeout(function() {
    newImg("prev")
  }, 150)
})

setInterval(function() {
  document.getElementsByTagName("img")[0].className += "slideRight"  
  setTimeout(function() {
    newImg("next")
  }, 150)
}, 5000)