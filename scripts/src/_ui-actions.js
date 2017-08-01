/* bind multiple events 
https://stackoverflow.com/questions/8796988/binding-multiple-events-to-a-listener-without-jquery
*/

var eventOn = function (element, events, fn) {
  events.split(/\s/gi).forEach((e) => element.addEventListener(e, fn, false));
}

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
  if (typeof selector == 'undefined' || selector == null) {
    return null
  }
  return document.querySelector(selector)
}

// get pointer position relatively to an element
var getPointer = function (e) {
  return {
    x: e.clientX,
    y: e.clientY
  }
}

// set and active ui

var activeUi = function (elmID) {

  if (typeof elmID === 'object') {
    elmID = elmID.id
  }

  var beActive = getElm('#' + elmID);
  beActive.classList.add('active')
  beActive.classList.remove('inactive')

  // setRandPos(beActive, window)

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
  if (!toAdd) toAdd = '';
  if (!toRemove) toRemove = '';

  el.classList.add(toAdd);
  el.classList.remove(toRemove);
  return el
}

function setRandPos(elm, rel) {
  var randPos = getRandPos(elm, rel)
  if (rel !== (window || document)) {
    rel.style.position = 'relative';
    console.log('not a window or a document')
  }
  elm.style.position = 'absolute';
  elm.style.left = randPos[0] + 'px'
  elm.style.top = randPos[1] + 'px'
}

// console.log(addRemoveClass())