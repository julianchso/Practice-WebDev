//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixTVShow {
  constructor(showName, showGenre, showDirector, showLength) {
    this.name = showName;
    this.genre = showGenre;
    this.director = showDirector;
    this.length = showLength;
  }

  play() {
    console.log("play episode");
  }
  pause() {
    console.log("Stopped");
  }
  addToList() {
    console.log("added to list")
  }
}

let TheBoys = new MakeNetflixTVShow("The Boys", "Action", "Mr. Director", 60)