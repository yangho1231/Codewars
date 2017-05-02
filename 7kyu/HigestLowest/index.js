function highAndLow(numbers){
  var arr = numbers.split(' ').sort(function(a, b) { return a - b });
  return arr[arr.length -1] + ' ' + arr[0];
}