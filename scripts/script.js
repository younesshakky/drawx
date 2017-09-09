(function () {

  function isNull(e) {
    return e === ('' || null) ? true : false
  }
  // window.isNull = isNull

  var dimensions = dimensions || {};

  var resizeEvent = function () {
    
  }

  var getWidth = function (element) {
    if (isNull(element)) {
      return null;
    }
    var width = element.innerWidth || element.offsetWidth;
    if (isNaN(width)) {
      return NaN
    }
    return width
  }
  var getHeight = function (element) {
    if (isNull(element)) {
      return null
    }
    var height = element.innerHeight || element.offsetHeight;

    if (isNaN(height)) {
      return NaN
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

  var setWidth = function (w) {
    this.el.width = w;
  }

  var setHeight = function (h) {
    this.el.height = h;
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

// canvas operations functions

// var drawCanva = document.getElementById('prim-canva');
// ctx = drawCanva.getContext('2d');

// var canvas = canvas || {};

// (function () {


//   // var Canvas = function (id) {
//   //   this.id = id;
//   // }

//   // Canvas.dimensions = {} || canvas.dimensions

//   // Canvas.dimensions.height = function (width) {
//   //   var el = Canvas.el;
//   //   if(!width){
//   //     return el.width;
//   //   }else {
//   //     el.width = width;
//   //     return el;
//   //   }
//   // }


//   // verifications before getting canvas to function
//   canvas.verify = {
//     // verify if the playground is actually a canvas element
//     isCanvas: function () {
//       if (canvas.playground) {
//         return (canvas.playground.constructor == HTMLCanvasElement) ? true : false;
//       }
//     },
//     isInDom: function () {
//       return (!!getElm('#' + canvas.playground.id) == true) ? true : false;
//     }
//   }

//   // getting targeted canvas
//   canvas.getcanva = function (id) {
//     this.playground = document.getElementById(id)
//     if (this.playground === null) {
//       throw new Error(`i can't find any element associated with id "${id}" \n tnx!`)
//     }
//     return this.playground;
//   }

//   /**
//    * create canvas without appending it to the Dom
//    */


//   // getting or setting canvas dimesions
//   canvas.dims = {
//     height: function (h) {
//       // get the maximum height of window
//       var wdMaxHeight = dimensions.get(window).height;
//       var height = wdMaxHeight - 200;

//       // setting height
//       if (h) {
//         height = h
//       }

//       if (height < 0) {
//         // Note: it's a bug to fix later
//         console.log('huh! ta malk mrid ', height)
//         return 0;
//       }
//       return height
//     },

//     width: function (w) {
//       // get the maximum width of window
//       var wdMaxWidth = dimensions.get(window).width;
//       var width = wdMaxWidth - 200;

//       // setting height
//       if (w) {
//         width = w
//       }
//       if (width < 0) {
//         // Note: it's a bug to fix later
//         console.log('huh! ta malk mrid ', width)
//         return 0
//       }
//       return width;
//     }
//   }

//   // working with context
//   canvas.context = function () {
//     if (!this.playground) {
//       throw new Error('wtf');
//       // return;
//     }
//     return canvas.playground.getContext('2d');
//   }
//   // canvas events
//   canvas.event = {

//     mousedown: function () {
//       canvas.verify.isMouseDown = true;
//       // do stuff
//     },
//     drag: function () {
//       if (!canvas.verify.isMousedown) {
//         // don't do stuff
//       }
//       // do stuff, like consoling, seems a cool feature
//       canvas.verify.isDragging = true
//     },
//     mouseover: function () {
//       // if (canvas.verify.isMousedown){
//       //   // do stuff
//       // }

//     }
//   }

//   // window.canvas = canvas

// })()


// using elsewhere in the app
// ctx = canvas.context;

var Resizer = function (canvasElement) {
  var _canvas = canvasElement;
  var events = {
    mousedown: function (e) {
      events.isMouseDown = true;
    },
    mouseup: function () {
      events.isMouseDown = false;
    },
    mousemove: function (e) {
      if (this.isMouseDown) {
        _canvas.width = e.clientX + 30
        _canvas.height = e.clientY + 30
      }


    }
  }
  return {
    events,
    domElement: _canvas
  }
}

// -- hole new era

function makeCanva(id) {
  var canvas = document.createElement('canvas');
  canvas.id = id;
  return canvas
}
// general purpose functions

// is (http/s) set
var httpIsset = function (url) {
  return url.match(/^(http:\/\/|https:\/\/)/) ? true : false
}

// save image url to localStorage
var saveImg = function (name, url) {
  var len = localStorage.length,
      id = len
      // date = new Date();
  
  dataJson = {
    name: name,
    url: url,
    // date: date.toLocaleDateString()
  }
  localStorage.setItem(id, JSON.stringify(dataJson))
  return dataJson
}

function imgNaturalSize (img) {
  if(img) {
    var height = img.naturalHeight;
    var width = img.naturalWidth;
    return {
      width: width,
      height: height
    }
  }
}

function setCanvasHeight (canvas, img) {
  var 
    // window dimensions (viewport)
    wdWidth = dimensions.get(window).width,
    wdHeight = dimensions.get(window).height,
      
    // image natural dimensions
    imgWidth = imgNaturalSize(img).width,
    imgHeight = imgNaturalSize(img).height;



  

  // if window width is greater than img width
  // if(wdWidth >= imgWidth)
}

function calcArea (img) {
  var width = imgNaturalSize(img).width || img.innerWidth || img.width,
    height = imgNaturalSize(img).height || img.innerHeight || img.height;

  return (width + height) * 2

} 
/**
 * @todo
 * this Js file will contain all error, success, info messages...
 * and UI actions and interactions of those notifications
 * such as insert notif in the dom or remove it
 */

// how to use (for now)

// new Notify (container, {
//   type: 'success',
//   message: 'nice looking successful operation',
//   init: true
// })

function Notify() {
  opts = arguments[1] || {}
  var isCreated = false;

  this.message = opts.message || 'default message';
  this.type = opts.type  || 'error';
  this.init = opts.init || false;
  this.parent = arguments[0]

  // console.log(opts)

  if(this.init){
    createNotif(this.parent);
  }

  function removeNotif(notif, parent) {
    if(isCreated) {
      parent.removeChild(notif)
      isCreated = false;
    }
  }

  function createNotif(parent) {
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
    notif.classList.add('notify--' + this.type);
    notif.innerText = this.message;


    var close = document.createElement('button')
    close.className = 'notify--close';
    close.innerText = 'close'
    // inDomNotif.appendChild(close)

    isCreated = true;

    notif.onclick = function () {
      removeNotif(notif, parent)
    }

    if(isCreated){
      // document.onclick = function () {
      //   removeNotif(notif, parent)      
      // }
    }
  

    // remove notification after 4 seconds
    setTimeout(function () {
      removeNotif(notif, parent);
    }, 4000);

    // return 
  }
}
/**
 * all the functions that returns random values
 */

// get random number with max value
var getRandom = function (max, min) {
  var rand = Math.floor(Math.random() * max);
  if(min === (null || undefined) ){
    return rand;
  }

  if(rand > min){
    return rand;
  }else {
    rand = Math.floor(Math.random() * max);
  }

  if(arguments.length > 1) {
    return Math.min(arguments[1], Math.floor( Math.random() * max ))
  }
  return Math.floor(Math.random() * max)
}

// geting random position
// 
var getRandPos = function (elm, rel) {
  if (typeof elm === 'undefined') {
    return undefined
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
// function centerElm(elm, rel) {
//   // position relative for parent is required
//   var isParentRelative = (getComputedStyle(rel).position == 'relative') ? true : false;
//   if (!isParentRelative) {
//     rel.style.position = 'relative';
//   }

//   valueX = dimensions.get(rel).halfX() - dimensions.get(elm).halfX();
//   valueY = dimensions.get(rel).halfY() - dimensions.get(elm).halfY();
//   elm.style.position = 'absolute';
//   elm.style.left = valueX + 'px';
//   elm.style.top = valueY + 'px';

// }

// get random alphabets string
// names randomly picked from :
// https://en.wikipedia.org/wiki/List_of_Intel_codenames
var randName = function () {
  var names = [
    'Agate', 'Jaketown', 'Kirkwood', 'Conroe', 'Dimona', 'Flaxton', 'Fort Sumter', 'Long Cove', 'Menlow', 'Bonetrail', 'Aurora', 'Altair', 'Spring Meadow', 'Stoneville', 'Kyrene', 'Woodridge', 'Zion'
  ]

  return names[ getRandom(names.length) ]
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
  this.el = selector;
  if (selector == null) {
    return null
  }

  var element = document.querySelector(selector)
  return element
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