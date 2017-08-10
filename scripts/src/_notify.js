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