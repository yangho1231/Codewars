var countBits = function(n) {
  var number = n.toString(2).split('0').join('').length;
  return number;
};
countBits(1234);
