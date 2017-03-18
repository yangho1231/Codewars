function createPhoneNumber(numbers){
  number = numbers.join(''); 
  number = "(" + number.substr(0, 3) + ") " + number.substr(3, 3) + '-' + number.substr(6,4);
  return number;
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])