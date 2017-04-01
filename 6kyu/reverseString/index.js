function reverseWords(str){
  str = str.split(' ').reverse();
  var value = str.join(' ');
  return value;
}
reverseWords("hello world!");