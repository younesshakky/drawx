(function () {

  function isNull(e) {
    return e === ('' || null) ? true : false
  }
  // window.isNull = isNull

  var dimensions = {}

  var getWidth = function (element) {
    if (isNull(element)) {
      return;
    }
    var width = element.innerWidth || element.offsetWidth;
    if (isNaN(width)) {
      return;
    }
    return width
  }
  var getHeight = function (element) {
    if (isNull(element)) {
      return;
    }
    var height = element.innerHeight || element.offsetHeight;

    if (isNaN(height)) {
      return;
    }

    return height;
  }

  var getHalf = function () {
    if (arguments.length) {
      var axis = arguments[1];
      var el = arguments[0];
      switch (axis) {
        case 'x-axis':
          return getWidth(el) / 2;
          break;
        case 'y-axis':
          return getHeight(el) / 2;
          break;
      }
    }
  }


  dimensions = {
    get: function (element) {
      if (isNull(element)) {
        return null;
      }
      return {
        el: element,
        width: getWidth(element),
        height: getHeight(element),
        half: function (axis) {
          return parseInt(getHalf(this.el, axis))
        }
      }
    },
    set: function (element) {
      if (isNull(element)) {
        return null;
      }
      return {
        width: setWidth,
        height: setHeight
      }
    }
  }

  window.dimensions = dimensions

})();

// var test = dimension.get('slab').height;
/**
 * general purpose functions
 */

// is (http/s) set
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

  // function onclose () {
    
  // }

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
      return dimensions.get(rel).width - dimensions.get(elm).width
    }

    var limY = function () {
      return dimensions.get(rel).height - dimensions.get(elm).height
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

  valueX = dimensions.get(rel).halfX() - dimensions.get(elm).halfX();
  valueY = dimensions.get(rel).halfY() - dimensions.get(elm).halfY();
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

// var drawCanva = document.getElementById('prim-canva');
// ctx = drawCanva.getContext('2d');

var cnv = cnv || {};

function MakeCanvas (id) {
  var canvas = document.createElement('canvas');
  canvas.id = id;
  return canvas;
}

styleText = 'background:red;padding:100px;margin:120px';

function setStyle (el, css) {
  var props = css.split(';');
  var prop = props.forEach(function(e) {
    return e.split('')
  });

  return prop;
}
