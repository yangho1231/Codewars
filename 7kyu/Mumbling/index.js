//Example accum("abcd");    // "A-Bb-Ccc-Dddd"

function accum(s) {
  s = s.toLowerCase();
  var arr = [];
  for(var i = 0; i < s.length; i++) {
    var x = s[i].repeat(i + 1);
    arr.push(x.charAt(0).toUpperCase() + x.substring(1).toLowerCase());
  }
  return arr;
}
accum("abcd");