function duplicateCount(text){
  text = text.toLowerCase().split('');
  var arr = [];
  var dup = [];
  for(var i = 0; i < text.length; i++) {
    if(arr.indexOf(text[i]) === -1) arr.push(text[i]);
    else if(arr.indexOf(text[i]) > -1 && dup.indexOf(text[i]) === -1) 
      dup.push(text[i]);
  }
  return !text ? 0 : dup.length;
}
duplicateCount("");
//Shorter Solution
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}
duplicateCount("Indivisibilities");