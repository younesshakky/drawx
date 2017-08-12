// direct Manipulation

/**
 * @todo after building error UIs
 * remove console notifs for ui notifications 
 */

var inputURL = getElm('#in-img-url');
var confirmUi = getElm('#confirm-input-img');
var url = inputURL.value;
var rawImg = new Image()

// var image = {}

// image.init = {
//   url: url,
// }


// chaning url when taping
inputURL.oninput = function () {
  url = encodeURI(inputURL.value);
}

getElm('#submit').onclick = function (e) {
  e.preventDefault();
  if (url.length < 4) {
    Notify(getElm('main'), {
      type: 'error',
      message: 'please enter at least 4 chars',
      init: true
    });

    return;
  }

  rawImg = createImg(url, getElm('.img-display'))
  confirmUi.classList.add('is-loading');

  // if image has loaded properly
  rawImg.onload = function () {
    activeUi('confirm-input-img');
    confirmUi.classList.remove('is-loading');

    Notify(getElm('main'), {
      type: 'success',
      message: 'Your image is here, you\'re ready to go.',
      init: true
    });
  }
  // if image has not loaded
  rawImg.onerror = function () {
    Notify(getElm('main'), {
      type: 'error',
      message: 'image not found',
      init: true
    });
    confirmUi.classList.remove('is-loading');
  }

  getElm('#img_name').value = randName()

}

getElm('#submit_name').onclick = function (e) {
  e.preventDefault();
  console.log('youlwalui');
  getElm('#isTrue').click()
  
}

getElm('#isTrue').onclick = function () {
  console.log('moving to next step');
  var edtr = getElm('#edit-img');
  activeUi(edtr);
  saveImg(getElm('#img_name').value, url)  
}

getElm("#isFalse").onclick = function (e) {
  e.preventDefault();
  activeUi('item-inputs');
  url = '';
  inputURL.value = '';

  getElm('.img-display').removeChild(getElm('.img-display').querySelector('img'))

}



// testing urls
// https://s-media-cache-ak0.pinimg.com/originals/90/21/41/902141f8da614fec9b97d884f907ec04.jpg

// for offline
// http://localhost:3000/1.jpg