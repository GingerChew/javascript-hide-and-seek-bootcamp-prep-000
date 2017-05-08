function getFirstSelector(selector){
   if (selector.length<=4){
     return document.getElementsByTagName(selector)[0]
  } else {
    return document.querySelector(selector)
  }
}

function nestedTarget(){
  document.querySelector(nested)
  return targetClass(nestedId)
}
