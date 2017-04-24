function allContinents(list) {
  // thank you for checking out the Coding Meetup kata :)
  var prsentConts = [];
  var cont = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  var allGood = true;
  for(var i = 0; i < list.length; i++) {
    prsentConts.push(list[i].continent);
  }
    for(var j = 0; j < cont.length; j++) {
      if(!prsentConts.includes(cont[j])) {
        allGood = false;
      }
    }
  
  return allGood;
}