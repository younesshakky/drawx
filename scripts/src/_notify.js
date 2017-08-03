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
 * ** 
 */

/**
 * @func Notify
 * 
 * requireds : 
 * * inputs from user
 * * type of notif
 * * where to insert in the DOM (parent)
 */
function Notify(opts = {}) {

  var type = opts.type,
    message = opts.message || this.message,
    appendTo = opts.appendTo;

  var isCreated = false;

  function removeNotif(notif, parent) {
      parent.removeChild(notif)
    // setTimeout(function () {

    // }, 10)
  }

  return {

    createNotif: function (parent) {
      if (typeof parent == ('undefined' || null)) {
        return;
      }
      if (isCreated) {
        return
      }
      var notif = document.createElement('div');

      notif.className = 'notify';

      parent.appendChild(notif);

      notif.classList.add(notif.className + '--' + opts.type);

      notif.classList.add('notify--' + opts.type);

      var inDomNotif = getElm('.' + notif.classList[1]);

      inDomNotif.innerText = opts.message;

      var close = document.createElement('button')
      close.className = 'notify--close';
      close.innerText = 'close'

      inDomNotif.appendChild(close)
      isCreated = true;

      setTimeout(function (){
        removeNotif(inDomNotif, parent),
        isCreated = false;
      }, 4000)

    },
    message: opts.message
  }


}




// test

// var error = new Notify();
// error.type = 'error'
// error.message = 'you\'ve missed something tho'

var error = new Notify({
  type: 'error',
  message: 'some error message'
});

var success = new Notify({
  type: 'success',
  message: 'some very fucking long success and unsuccess message from hell and heaven'
});

var info = new Notify({
  type: 'info',
  message: 'very informative info message dude'
})


// error.createNotif(getElm('#rect'))
// success.createNotif(getElm('#rect'))
// info.createNotif(getElm('#rect'))



console.log(error)
console.log(success)