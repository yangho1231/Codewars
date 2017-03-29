function songDecoder(song){
  song = song.replace(/(WUB)+/g," ").trim();
  return song;
}
songDecoder("AWUBBWUBC");