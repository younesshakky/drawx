// direct Manipulation

/**
 * @todo after building error UIs
 * remove console notifs for ui notifications 
 */

var inputURL = getElm('#in-img-url');
var confirmUi = getElm('#confirm-input-img');
var url = inputURL.value;
var rawImg = new Image()

var error = new Notify({
  type: 'error',
  message: 'error'
});

var success = new Notify({
  type: 'success',
  message: 'bless'
});

// chaning url when taping
inputURL.oninput = function () {
  url = encodeURI(inputURL.value);
}

getElm('#submit').onclick = function (e) {
  e.preventDefault();
  if (url.length > 3) {
    activeUi('confirm-input-img');
    // prefixing url with http if it's not already been set 
    rawImg = createImg(url, getElm('#confirm-input-img .img-display'))

  } else {

    error.message = 'please enter at least 4 chars';
    error.createNotif(getElm('#item-inputs'));
  }
  console.log(rawImg)
  // while()
}

// handling image loading issues
rawImg.onload = function () {
  success.message = 'bless, image loaded';
  success.createNotif(getElm('main'));
  confirmUi.classList.remove('is-loading');
}

rawImg.onerror = function () {
  error.message = 'it looks like an evil error';
  error.createNotif(getElm('main'));
}

getElm("#isFalse").onclick = function (e) {
  e.preventDefault();
  activeUi('item-inputs');
  confirmUi.querySelector('img').src = '';
  url = '';
  inputURL.value = '';
}


getElm('#isTrue').onclick = function () {
  console.log('moving to next step')
}


// testing urls
// https://s-media-cache-ak0.pinimg.com/originals/90/21/41/902141f8da614fec9b97d884f907ec04.jpg

// for offline
// http://localhost:3000/assassins_creed_game-HD-Wallpaper.jpg