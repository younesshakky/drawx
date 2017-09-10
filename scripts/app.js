// direct Manipulation

var initUI = getElm('#item-inputs')
var confirmUi = getElm('#confirm-input-img');
var inputURL = getElm('#in-img-url');
var edtr = getElm('#edit-img');

var url = inputURL.value;
var rawImg = new Image()
var body = document.body;

var mainCanvas;

//if the main canvas has been initialized
var isCanvasInit = false

// is images history inserted to DOM
var isInserted = false;


function showHistory(e) {
  if (!localStorage.length) {
    Notify(getElm('main'), {
      type: 'info',
      message: 'no image found in history',
      init: true
    })
    return;
  }

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

function imageHasLoaded() {
  activeUi('confirm-input-img');
  removeClass(initUI, 'is-loading');

  Notify(getElm('main'), {
    type: 'success',
    message: 'Your image is here, you\'re ready to go.',
    init: true
  });
}

function imageHasNotLoaded() {
  Notify(getElm('main'), {
    type: 'error',
    message: 'image not found',
    init: true
  });
  initUI.classList.remove('is-loading');
  
  takeoff('html', '.img-display');
}

function submitUrl(e) {
  if (url.length < 4) {
    Notify(getElm('main'), {
      type: 'error',
      message: 'please enter at least 4 chars',
      init: true
    });
    return;
  }

  takeoff('html', '.img-display');
  rawImg = createImg(url, getElm('.img-display'));
  addClass(initUI, 'is-loading')

  // if image has loaded properly
  rawImg.onload = function () {
    imageHasLoaded()
  }

  // if image has not loaded
  rawImg.onerror = function () {
    imageHasNotLoaded()
  }

  setRandomName()
}

function setRandomName() {
  var imgInput = getElm('#img_name')
  imgInput.value = randName();
  imgInput.setAttribute('autofocus', 'true')
}

function validAndSave() {
  var imgName = getElm('#img_name').value;

  if (imgName.length < 1) {
    Notify(getElm('main'), {
      type: 'error',
      message: 'add more charcters',
      init: true
    });

    return;
  }

  // uncoment code below later
  // saveImg(imgName, url)
}

function openEditor() {
  activeUi('edit-img');
  var className = 'edit-mode'

  if (!body.classList.contains(className)) {
    body.className = className
  }
}

function backToURL() {
  activeUi('item-inputs');
  url = '';
  inputURL.value = '';
  takeoff('html', '.img-display')
}

function initiateCanvas() {
  mainCanvas = makeCanva('primary-canvas');
  edtr.appendChild(mainCanvas)

  var checkCanvas = setInterval(function () {
    if (mainCanvas) {
      console.log('canvas has initialized')
      isCanvasInit = true
      clearInterval(checkCanvas)
    }
  }, 100)
}

// chaning url when taping
eventOn(inputURL, 'input change', function () {
  url = encodeURI(inputURL.value);
})

// show imageshistory 
getElm('#show-history').onclick = function (e) {
  e.preventDefault();
  showHistory()
}

// submit url
getElm('#submit').onclick = function (e) {
  e.preventDefault();
  submitUrl()
}

// submit name
getElm('#submit_name').onclick = function (e) {
  e.preventDefault();
  getElm('#isTrue').click()
}

// satisfied & move to editing
getElm('#isTrue').onclick = function (e) {
  e.preventDefault()
  validAndSave()
  initiateCanvas()
  openEditor()
}

// get back to url input
getElm("#isFalse").onclick = function (e) {
  e.preventDefault();
  backToURL()
}