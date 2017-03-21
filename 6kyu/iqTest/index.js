function iqTest(numbers){
  var odd = [];
  var even = [];
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) even.push(numbers[i]);
    else odd.push(numbers[i]);
  }
  return odd.length > even.length ? numbers.indexOf(even[0])+1 : numbers.indexOf(odd[0])+1;
}
iqTest("2 4 7 8 10");

//alternative way

function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  var even = numbers.filter(function(elem) {
      return elem % 2 === 0;
  });
  var odd = numbers.filter(function(elem) {
      return elem % 2 !== 0;
  });
  return odd.length > even.length ? numbers.indexOf(even[0])+1 : numbers.indexOf(odd[0])+1;
}
iqTest("2 4 7 8 10");