function alphabetPosition(text) {
  var value = "";
  for(var i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i);
    if(code > 64 && code < 91) {
      value += (code- 64) + " " ;
    }
  }
  return value.slice(0, value.length-1);
}
alphabetPosition("The sunset sets at twelve o' clock.");