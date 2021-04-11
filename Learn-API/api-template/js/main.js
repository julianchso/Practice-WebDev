//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const value = document.querySelector("input").value;
  const api = "uAFXQcg1PeiTGPsinrhpcqRlqd8vECnzQeqGA0ee";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${api}&date=${value}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.media_type == "video") {
        document.querySelector("img").src = ""
        document.querySelector("iframe").src = data.url;
      } else if (data.media_type === "image") {
        document.querySelector("iframe").src = ""
        document.querySelector("img").src = data.hdurl;
      }
      console.log(data);
      document.querySelector("h3").innerHTML = data.explanation;
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
