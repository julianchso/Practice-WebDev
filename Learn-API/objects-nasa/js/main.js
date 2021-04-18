//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector("button").addEventListener("click", getPic);

function getPic() {
  let apikey = "uAFXQcg1PeiTGPsinrhpcqRlqd8vECnzQeqGA0ee";
  let date = document.querySelector("input").value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=${date}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.media_type = "video") {
        document.querySelector("iframe").src = data.url;
      } else {
      document.querySelector("img").src = data.url;
      }
    });
}
