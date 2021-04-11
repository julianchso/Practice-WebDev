//Get a dog photo from the dog.ceo api and place the photo in the DOM

document.querySelector("button").addEventListener("click", getDog);

function getDog() {
  const url = "https://dog.ceo/api/breeds/image/random";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("img").src = data.message;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
