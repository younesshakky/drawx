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
var getUis = function (c) {

  var elms = document.querySelectorAll(c);
  var uisArr = []

  for (var i = 0; i < elms.length; i++) {
    uisArr.push(elms[i].id)
  }
  return uisArr;
}

var UIs = getUis('.ui_elm');

/**
 * @todo Getting multiple elements not 1
 */

var getElm = function (selector) {
  return document.querySelector(selector)
}

// get pointer position relatively to an element
// var getPointer = function (e) {
//   return {
//     x: e.clientX,
//     y: e.clientY
//   }
// }
var takeoff = function (type, target, cb) {


  if (typeof el == 'string') {
    target = getElm(target)
  }
  // if (typeof el == 'object') { target = target }

  switch (type) {
    case 'html':
      target.innerHTML = null;
      break;

    case 'text':
      target.innerText = null;
      break;

    case 'inputValue':
      target.value = null;
      break;

    default:
      break;
  }
  if (cb) {
    return cb.call(this, ...arguments)
  }
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
var addClass = function (el, c) {
  if (el.classList) {
    el.classList.add(c)
  } else {
    el.className += ' ' + c
  }
}

// removing class
var removeClass = function (el, c) {
  if (el.classList) {
    el.classList.remove(c)
  } else {
    el.className = el.className.replace(c, '')
  }
}

var createImg = function (src, parent) {
  // debugger
  if (
    typeof src == ('undefined' || null) ||
    typeof parent == ('undefined' || null)
  ) {
    return;
  }

  if (httpIsset(url) == false) {
    src = '//' + src;
  }

  var initImg = new Image(),
    isCreated = false;
  if (isCreated) {
    return
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
    if (store.hasOwnProperty(key)) {
      items.push([key, store[key]])
    }
  }

  return items;
}


var moveTo = function (id, dostuff) {
  var el = document.getElementById(id);
  el.removeAttribute('id');
  location.hash = id;
  el.setAttribute('id', id);
  // return call.dostuff(this, ...arguments)
}

function css(el, styles) {
  for (prop in styles) {
    el.style[prop] = styles[prop]
  }
}

function createElement (tag, opts) {
  var el = document.createElement(tag)
  
  if (opts) {
    if (opts.className) {
      el.className = opts.className
    }
    if (opts.id) {
      el.id = opts.id
    }
    if (opts.text) {
      el.innerText = opts.text
    }
    if (opts.html) {
      el.innerHTML = opts.html      
    }
    if (opts.appendTo) {
      opts.appendTo.appendChild(el)
    }
  }
  return el;
}