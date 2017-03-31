function isValidWalk(walk) {
  if(!walk.length) return false;
  for(var i = 0; i < walk.length; i++) {
    if(walk.length === 10 && walk[i] != walk[i+1] && walk[1] === walk[walk.length-1]) return true;
    else return false;
  }
}