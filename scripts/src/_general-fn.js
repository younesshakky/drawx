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