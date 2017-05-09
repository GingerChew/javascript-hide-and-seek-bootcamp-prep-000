function getFirstSelector(selector){
   if (selector.length<=4){
     return document.getElementsByTagName(selector)[0]
  } else {
    return document.querySelector(selector)
  }
}

function nestedTarget(){
  var nestedId= document.querySelector('#nested .target')
  return nestedId
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n){
  var listItems=document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i=0, I=listItems.length; i<I; i++){
    listItems[i].innerHTML= (parseInt(listItems[i].innerHTML)+n)
  }
}
