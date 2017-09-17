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

    var notif = createElement('div', {
      className: 'notify',
      text: this.message,
      appendTo: parent
    })

    notif.classList.add('notify--' + this.type);

    var close = createElement('button', {
      className: 'notify--close',
      text: 'close'
    })


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