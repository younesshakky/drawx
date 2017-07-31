// direct Manipulation

// main drawable canva
var primCanva = document.getElementById('primary-canva')

var inputURL = document.getElementById('in-img-url');
var submitURL = document.getElementById('submit');
var confirmUi = getElm('#confirm-input-img');
var url = inputURL.value;
var isImg = new Image();

inputURL.oninput = function () {
  url = encodeURI(inputURL.value);
}

submitURL.onclick = function (e) {
  e.preventDefault();
  if (url.length > 3) {
    activeUi('confirm-input-img')
    if (!httpIsset(url)) {
      url = "https://" + url;
    }
    isImg.src = url;
    confirmUi.querySelector('img').src = isImg.src
    console.log(isImg)
  } else {
    alert('please enter at least 4 chars')
  }
}

// handling image loading issues
isImg.onerror = function () {
  var errorWrap = confirmUi.querySelector('.isError')
  errorWrap.innerHTML = '<div class="error">an error occurs</div>'
  setTimeout(function () {
    errorWrap.innerHTML = null
  }, 5000)


}

isImg.onload = function () {
  console.log('image has been loaded')
}


confirmUi.querySelector('img').src.onchange = function () {
  alert('hey loaded')
}


getElm("#isFalse").onclick = function (e) {
  e.preventDefault();
  activeUi('item-inputs')

  inputURL.value = null
}

getElm('#isTrue').onclick = function () {

}


// testing url
// https://s-media-cache-ak0.pinimg.com/originals/90/21/41/902141f8da614fec9b97d884f907ec04.jpg

// for offline
// http://localhost:3000/assassins_creed_game-HD-Wallpaper.jpg