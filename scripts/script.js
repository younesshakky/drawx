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
/**
 * general purpose functions
 */

// is (http/s) flag is set
var httpIsset = function (url) {
  return url.match(/^(http:\/\/|https:\/\/)/) ? true : false
}

// verify if every thing is right and move to canvas editing

/**
 * @todo
 * this Js file will contain all error, success, info messages...
 * and UI actions and interactions of those notifications
 * such as insert notif in the dom or remove it
 */

/**
 * Error cases
 * ** (image not loaded or url broken)
 * ** (url not valid)
 */

function Notify(opts = {}) {

  var type = opts.type,
    message = opts.message
  var isCreated = false;

  function removeNotif(notif, parent) {
    parent.removeChild(notif)
  }

  return {

    createNotif: function (parent) {
      if (typeof parent == ('undefined' || null)) {
        return;
      }
      if (isCreated) {
        return;
      }
      // if parent position is relative or absolute
      isPositioned = (getComputedStyle(parent).position) == ('absolute' || 'relative') ?
        true :
        false;
        
      if (!isPositioned) {
        parent.style.position = 'relative'
      }

      var notif = document.createElement('div');
      notif.className = 'notify';
      parent.appendChild(notif);
      notif.classList.add(notif.className + '--' + opts.type);
      notif.classList.add('notify--' + opts.type);

      var inDomNotif = getElm('.' + notif.classList[1]);
      inDomNotif.innerText = this.message;

      var close = document.createElement('button')
      close.className = 'notify--close';
      close.innerText = 'close'
      // inDomNotif.appendChild(close)

      isCreated = true;

      // remove notification after 4 seconds
      setTimeout(function () {
        removeNotif(inDomNotif, parent);
        isCreated = false;
      }, 4000);
    },
    message: opts.message
  }
}
/**
 * all the functions that returns random values
 */

// get random number with max value
var getRandom = function (max) {
  return Math.floor(Math.random() * max)
}

// geting random position
var getRandPos = function (elm, rel) {
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
      y: (limY() < 0) ? 0 : limY()
    }

}
  return [getRandom(getLimit().x), getRandom(getLimit().y)]

}
// exeption (LOL) :  read line 2
// to put in _ui-actions
// for elements with unknown dimensions 
function centerElm(elm, rel) {
  // position relative for parent is required
  var isParentRelative = (getComputedStyle(rel).position == 'relative') ? true : false;
  if (!isParentRelative) {
    rel.style.position = 'relative';
  }

  valueX = dimensions(rel).halfX() - dimensions(elm).halfX();
  valueY = dimensions(rel).halfY() - dimensions(elm).halfY();
  elm.style.position = 'absolute';
  elm.style.left = valueX + 'px';
  elm.style.top = valueY + 'px';

}
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
var getUis = (function () {

  var elms = document.querySelectorAll('.ui_elm');
  var uisArr = []

  for(var i = 0; i < elms.length; i++){
    uisArr.push(elms[i].id)
  }
  return uisArr;
})

var UIs = getUis();

/**
 * @todo Getting multiple elements not 1
 */
// elements transportating
function getElm(selector) {
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

// set random position relatively to parent element
// function setRandPos(elm, rel) {
//   var randPos = getRandPos(elm, rel)
//   if (rel !== (window || document)) {
//     rel.style.position = 'relative';
//     console.log('not a window or a document')
//   }
//   elm.style.position = 'absolute';
//   elm.style.left = randPos[0] + 'px'
//   elm.style.top = randPos[1] + 'px'
// }


var createImg = function (src, parent) {
  if (
    typeof src == ('undefined' || null) ||
    typeof parent == ('undefined' || null)
  ) { return; }

  if (httpIsset(url) == false) {
    src = 'https://' + src;
  }

  var initImg = new Image(),
    isCreated = false;
  if (isCreated) {
    return;
  }
  initImg.src = src;
  console.log(parent)
  parent.appendChild(initImg)

  isCreated = true
  return initImg;

}
// canvas operations functions

var drawCanva = document.getElementById('prim-canva');
ctx = drawCanva.getContext('2d');