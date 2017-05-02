function removeDuplication(arr){
  var arry = [];
  var dup = [];
  arr = arr.sort();
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i+1]) dup.push(arr[i+1]);
    else if(dup.indexOf(arr[i])===-1) arry.push(arr[i]);
  }
  return arry;
}

//Shorter Solution\

const removeDuplication = a => a.filter( v => a.indexOf(v)===a.lastIndexOf(v) ) ;