function getFirstSelector(selector){
   if (selector.length<=4){
     return document.getElementsByTagName(selector)[0]
  } else {
    return document.querySelector(selector)
  }
}

function nestedTarget(){
  var nestedId= document.getElementById(nested)
  var targetClass= nestedId.getElementsByClass(target)
  return targetClass
}
