var headerItem = document.querySelectorAll(".header-item")
var boxImg = document.querySelectorAll(".box-img")
headerItem.forEach(function (ev) {
  ev.addEventListener("click", function (eve) {
    headerItem.forEach(function (e) {
      e.style.backgroundColor = "transparent"
      e.style.color = "black"
    })
    ev.style.backgroundColor = "brown"
    ev.style.color = "white"
    boxImg.forEach(function (e, i) {
      e.style.transform = "scale(0)"
      setTimeout(function () {
        e.style.display = "none"
      }, 500)
      if (e.getAttribute("class").search(eve.target.id) != -1) {
        boxImg[i].style.transform = "scale(1)"
        setTimeout(function () {
          boxImg[i].style.display = "block"
        }, 500)
      }
    })
  })
})