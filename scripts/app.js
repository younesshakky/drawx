// direct Manipulation

/**
 * @todo after building error UIs
 * remove console notifs for ui notifications 
 */

// main drawable canva
var primCanva = getElm('#prim-canva')

var inputURL = getElm('#in-img-url');
var confirmUi = getElm('#confirm-input-img');
var url = inputURL.value;
var rawImg = new Image();

// chaning url
inputURL.oninput = function () {
  url = encodeURI(inputURL.value);
}

getElm('#submit').onclick = function (e) {
  e.preventDefault();
  if (url.length > 3) {
    activeUi('confirm-input-img')
    // prefixing url with http if it's not already been set 
    if (!httpIsset(url)) {
      url = "https://" + url;
    }
    rawImg.src = url;
    confirmUi.querySelector('img').src = rawImg.src
    // console.log(rawImg)
  } else {
    console.log('please enter at least 4 chars')
  }
  confirmUi.classList.add('is-loading')
}

// handling image loading issues
rawImg.onerror = function () {
  console.log('it looks like an evil error')
}

rawImg.onload = function () {
  console.log('bless, image loaded')
}

getElm("#isFalse").onclick = function (e) {
  e.preventDefault();
  activeUi('item-inputs')
  confirmUi.querySelector('img').src = ''
  // rawImg.src = ''
  url = ''
  inputURL.value = ''
}

getElm('#isTrue').onclick = function () {

}


// testing url
// https://s-media-cache-ak0.pinimg.com/originals/90/21/41/902141f8da614fec9b97d884f907ec04.jpg

// for offline
// http://localhost:3000/assassins_creed_game-HD-Wallpaper.jpg