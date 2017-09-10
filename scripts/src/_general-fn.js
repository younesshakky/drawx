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

