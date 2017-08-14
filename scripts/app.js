// direct Manipulation

/**
 * @todo after building error UIs
 * remove console notifs for ui notifications 
 */

var initUI = getElm('#item-inputs')
var confirmUi = getElm('#confirm-input-img');
var inputURL = getElm('#in-img-url');

var url = inputURL.value;
var rawImg = new Image()


// bools
/** if the main canvas has been initialized */
var isCanvasInit = false

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
  initUI.classList.add('is-loading');

  // if image has loaded properly
  rawImg.onload = function () {
    activeUi('confirm-input-img');
    initUI.classList.remove('is-loading');

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
    initUI.classList.remove('is-loading');
    getElm('.img-display').innerHTML = null

  }

  getElm('#img_name').value = randName()
  getElm('#img_name').setAttribute('autofocus', 'true')

}

getElm('#submit_name').onclick = function (e) {
  e.preventDefault();
  console.log('youlwalui');
  getElm('#isTrue').click()
  
}

getElm('#isTrue').onclick = function (e) {
  var imgName = getElm('#img_name').value;
  e.preventDefault()

  if(imgName < 1){
    Notify(getElm('main'), {
      type: 'error',
      message: 'add more charcters',
      init: true
    });

    return;
  }
  // console.log('moving to next step');
  var edtr = getElm('#edit-img');
  activeUi(edtr);
  saveImg(imgName, url)  
  console.log(localStorage)
}

getElm("#isFalse").onclick = function (e) {
  e.preventDefault();
  activeUi('item-inputs');
  url = '';
  inputURL.value = '';

  getElm('.img-display').innerHTML = null

}


var isInseted = false;
getElm('#show-history').onclick = function(e) {
  e.preventDefault()
  activeUi('history-imgs');
  if(!isInseted){
    var histImages = historyURLS();
    histImages.forEach((e) => {
      getElm('#history-imgs').innerHTML += 
      `<div class="single-img">
        <a target="_blank" href="${e}">${e}</a>
      </div>`;
      isInseted = true
    });
  }
}


