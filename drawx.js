// main drawable canva
var primCanva = document.getElementById('primary-canva')

// get (2d) dimensions of a certain element
var dimensions = function (item) {
  if (typeof item == 'undefined' || !item) {
    return false;
  }

  function getWidth() {
    return item.innerWidth || item.offsetWidth;
  }

  function getHeight() {
    return item.innerHeight || item.offsetHeight;
  }

  function half() {
    return {
      x: () => {
        return getWidth() / 2
      },
      y: () => {
        return getHeight() / 2
      }

    }
  }

  return {
    height: getHeight(),
    width: getWidth(),
    halfX: half().x,
    halfY: half().y
  }
}

// get random number with max value
var getRandom = function getRandom(max) {
  return Math.floor(Math.random() * max)
}

var randPosition = function (element) {
  if (typeof element === 'undefined') {
    // testing this new bity
    throw new Error(TypeError.name('shit'))
  }
  function getLimit() {
    var limX = function () {
      return Math.floor(dimensions(element).halfX)
    }

    var limY = function () {
      return Math.floor(dimensions(element).halfY)
    }

    return {
      x: limX(),
      y: limY()
    }

    return [getLimit().x, getLimit().y] 
  }

  limitX = Math.round(dimensions(window).width - (dimensions(element).width / 2))
  limitY = Math.round(dimensions(window).height - (dimensions(element).height / 2))
  return dimensions(element).width
  // getRandom(limit)
}

/* bind multiple events 
https://stackoverflow.com/questions/8796988/binding-multiple-events-to-a-listener-without-jquery
*/
var eventOn = function (element, events, fn) {
  events.split(/\s/gi).forEach((e) => element.addEventListener(e, fn, false));
}

// elements transportating

function getElm(selector) {
  return document.querySelector(selector)
}

// get pointer position relatively to an element
var getPointer = function (e) {
  return [e.clientX, e.clientY]
}

var httpIsset = function (url) {
  return url.match(/^(http:\/\/|https:\/\/)/) ? true : false
}

// check if image has loaded without errors
var imgHasLoaded = function (img) {
  if (!img.complete || img.naturalWidth === 0) {
    return false
  }

  return true
}

var UIs = [
  'confirm-input-img',
  'item-inputs',
  'edit-img',
  'save-img'
]

var activeUi = function (elmID) {

  if (typeof elmID === 'object') {
    elmID = elmID.id
  }

  var beActive = document.getElementById(elmID);
  beActive.classList.add('active')
  beActive.classList.remove('inactive')

  for (var i = 0; i < UIs.length; i++) {
    if (UIs[i] !== null && UIs[i] !== elmID) {
      document.getElementById(UIs[i]).classList.remove('active')
      document.getElementById(UIs[i]).classList.add('inactive')
    }
  }
}


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
  // setTimeout(function () {
  //   if (!imgHasLoaded(isImg)) {
  //     alert("your image hasn't loaded properly")
  //   } else {
  //     alert("your image is here")
  //   }
  // }, 5000)
}

// handling image loading issues
isImg.onerror = function () {
  var errorWrap = confirmUi.querySelector('.isError')
  errorWrap.innerHTML = '<div class="error">an error occurs</div>'
  setTimeout(function () {
    errorWrap.innerHTML = null
    console.clear()
  }, 3000)


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

  // inputURL.value = null
}

getElm('#isTrue').onclick = function () {

}


// testing url
// https://s-media-cache-ak0.pinimg.com/originals/90/21/41/902141f8da614fec9b97d884f907ec04.jpg

// for offline
// http://localhost:3000/assassins_creed_game-HD-Wallpaper.jpg