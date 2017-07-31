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

// geting random position
var randPosition = function (elm, rel) {
  if (typeof elm === 'undefined') {
    throw new Error("some error tho!")
  }

  function getLimit() {
    var limX = function () {
      return dimensions(rel).width - dimensions(elm).width
    }

    var limY = function () {
      return dimensions(rel).height - dimensions(elm).height
    }

    return {
      x: (limX() < 0) ? 0 : limX(),
      y: (limY() < 0) ? 0: limY()
    }

  }
  return [getRandom(getLimit().x), getRandom(getLimit().y)]

}
/* bind multiple events 
https://stackoverflow.com/questions/8796988/binding-multiple-events-to-a-listener-without-jquery
*/

// staticly setted ui IDs

/* 
 * @TODO: get IDs functionaly (dinamicly)
 */
var UIs = [
  'confirm-input-img',
  'item-inputs',
  'edit-img',
  'save-img'
]

// elements transportating
function getElm(selector) {
  return document.querySelector(selector)
}

var eventOn = function (element, events, fn) {
  events.split(/\s/gi).forEach((e) => element.addEventListener(e, fn, false));
}

// get pointer position relatively to an element
var getPointer = function (e) {
  return [e.clientX, e.clientY]
}

// set and active ui

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

// check if image has loaded without errors
var imgHasLoaded = function (img) {
  if (!img.complete || img.naturalWidth === 0) {
    return false
  }
  return true
}

// is (http/s) flag is set
var httpIsset = function (url) {
  return url.match(/^(http:\/\/|https:\/\/)/) ? true : false
}

// adding & removing class
var addRemoveClass = function (el, toAdd, toRemove) {
  if (typeof el == 'undefined') {
    return null;
  }
  if(!toAdd) toAdd = '';
  if (!toRemove) toRemove = '';

  el.classList.add(toAdd);
  el.classList.remove(toRemove);
  return el
}

// console.log(addRemoveClass())