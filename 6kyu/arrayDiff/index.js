function array_diff(a, b) {
  var result = a.filter(function(index) {
    return b.indexOf(index) === -1;
  })
  return result;
}
array_diff([1,2,2,2,3],[2]);