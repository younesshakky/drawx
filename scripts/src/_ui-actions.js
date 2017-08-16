/**
 * functions that interacts with Dom
 */


/* bind multiple events 
https://stackoverflow.com/questions/8796988/binding-multiple-events-to-a-listener-without-jquery
*/
var eventOn = function (element, events, fn) {
  events.split(/\s/gi).forEach((e) => element.addEventListener(e, fn, false));
}

// grabing uis dynamically
var getUis = function () {

  var elms = document.querySelectorAll('.ui_elm');
  var uisArr = []

  for(var i = 0; i < elms.length; i++){
    uisArr.push(elms[i].id)
  }
  return uisArr;
}

var UIs = getUis();

/**
 * @todo Getting multiple elements not 1
 */
// elements transportating
var getElm = function (selector) {
  this.el = selector;
  if (typeof selector == 'undefined' || selector == null) {
    return null
  }

  var element = document.querySelector(selector)
  return element
}

// get pointer position relatively to an element
var getPointer = function (e) {
  return {
    x: e.clientX,
    y: e.clientY
  }
}

var clearHTMLFrom = function (el) {
  var toBeCleared;

  if(typeof el == 'string'){
    toBeCleared = getElm(el);
  }

  if(typeof el == 'object'){
    toBeCleared = el;
  }

  toBeCleared.innerHTML = null
}

// set and active ui

var activeUi = function (elmID) {

  if (typeof elmID === 'object') {
    elmID = elmID.id
  }

  var beActive = getElm('#' + elmID);
  beActive.classList.add('active')

  // setRandPos(beActive, window)

  for (var i = 0; i < UIs.length; i++) {
    if (UIs[i] !== null && UIs[i] !== elmID) {
      document.getElementById(UIs[i]).classList.remove('active')
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

// adding class
var addClassTo = function (el, className) {
  el.classList.add(className)
  return el;
}

// removing class
var  removeClassFrom = function (el, className) {
  el.classList.remove(className)
  return el;
}

var createImg = function (src, parent) {
  // debugger
  if (
    typeof src == ('undefined' || null) ||
    typeof parent == ('undefined' || null)
  ) { return; }

  if (httpIsset(url) == false) {
    src = '//' + src;
  }

  var initImg = new Image(),
    isCreated = false;
  if (isCreated) {
    return;
  }
  initImg.src = src;
  initImg.onload = function () {
    if (imgHasLoaded(initImg) == false) {
      return false;
    }
  }

  parent.appendChild(initImg)

  isCreated = true
  return initImg;
}


var historyURLS = function () {
  var store = localStorage;
  var items = items || [];

  for (key in store) {
    if (store.hasOwnProperty(key)){
      items.push([key, store[key]])
    }
  }

  return items;

}