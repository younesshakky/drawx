// direct Manipulation

/**
 * @todo after building error UIs
 * remove console notifs for ui notifications 
 */

var initUI = getElm('#item-inputs')
var confirmUi = getElm('#confirm-input-img');
var inputURL = getElm('#in-img-url');

var mainCanvas;

var url = inputURL.value;
var rawImg = new Image()


// bools
/** if the main canvas has been initialized */
var isCanvasInit = false

// chaning url when taping

eventOn(inputURL, 'input change', function (){
  url = encodeURI(inputURL.value);
})
// inputURL.oninput = function () {
// }

var isInserted = false;
getElm('#show-history').onclick = function (e) {
  e.preventDefault()
  activeUi('history-imgs');
  var histImages = historyURLS();
  if (!isInserted) {
    histImages.forEach((e) => {
    var urlJSON = JSON.parse(e[1])
      getElm('#history-imgs').innerHTML +=
        `<div class="single-link">
        <a target="_blank" href="${urlJSON.url}">${urlJSON.name}</a>
      </div>`;
    });
    isInserted = true
  }
  // to fix later in getElm()
  var slink = document.querySelectorAll('.single-link');
  for (let i = 0; i < slink.length; i++) {
    slink[i].querySelector('a').onclick = function (e) {
      e.preventDefault();
      activeUi('item-inputs')
      // url = this.href;
      inputURL.value = this.href;      
      url = inputURL.value;
    }
  }
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

  clearHTMLFrom('.img-display');
  rawImg = createImg(url, getElm('.img-display'));
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
    // clea
    clearHTMLFrom('.img-display');
  }

  getElm('#img_name').value = randName()
  getElm('#img_name').setAttribute('autofocus', 'true')

}

getElm('#submit_name').onclick = function (e) {
  e.preventDefault();
  getElm('#isTrue').click()
}

getElm('#isTrue').onclick = function (e) {
  var imgName = getElm('#img_name').value;
  e.preventDefault()

  if(imgName.length < 1){
    Notify(getElm('main'), {
      type: 'error',
      message: 'add more charcters',
      init: true
    });

    return;
  }

  var edtr = getElm('#edit-img');
  activeUi(edtr);
  saveImg(imgName, url)  
  // console.log(localStorage)

  mainCanvas = MakeCanva('primary-canvas');
  edtr.appendChild(mainCanvas)

  mainCanvas.height = cnv.dims.height(
    dimensions.get(window).height
  );
  mainCanvas.width = cnv.dims.width(
    dimensions.get(window).width
  );

  var checkCanvas = setInterval(() => {
    if (mainCanvas) {
      console.log('canvas has initialized')
      isCanvasInit = true
      clearInterval(checkCanvas)
    }
  }, 100)
}


getElm("#isFalse").onclick = function (e) {
  e.preventDefault();
  activeUi('item-inputs');
  url = '';
  inputURL.value = '';
  clearHTMLFrom('.img-display')
}