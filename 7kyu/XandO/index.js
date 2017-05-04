function XO(str) {
  str = str.split('').map((elem) => {
    return elem.toLowerCase();
  })
    var o = str.filter((elem) => {
      return elem === 'o';
    })
    var x = str.filter((elem) => {
      return elem === 'x';
    })
    return o.length === x.length ? true : false
}
XO('xxxm');

//Shorter solution
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}