function list(names){
  var arr = [];
  if(names.length === 0) return '';
  for(var i = 0; i < names.length; i++) {
    if(names.length === 1) return names[0].name;
    else if(names.indexOf(names[i]) < names.length - 2) arr.push(names[i].name+', ');    
    else if(names.indexOf(names[i])=== names.length -2) arr. push(names[i].name + ' ');
    else if(names.indexOf(names[i]) === names.length - 1) arr.push('& ' + names[i].name );
  }
  var string = arr.join('');
  return string;
}
list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])
