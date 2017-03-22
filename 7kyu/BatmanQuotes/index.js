//Output needs to be like below
// getQuote(["I am vengeance. I am the night. I am Batman!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"], "Rob1n") 
  // =>  "Robin: Holy haberdashery, Batman!

function getQuote(quotes, hero) {
  var heroes = { B: "Batman", J: "Joker", R: "Robin" }
  var quote = hero.match(/\d/)[0]
  
  return heroes[hero[0]] + ": " + quotes[quote]
}