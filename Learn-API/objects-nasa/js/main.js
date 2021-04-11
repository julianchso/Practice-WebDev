// //The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
// document.querySelector("button").addEventListener("click", getPic);

// function getPic() {
//   let apikey = "uAFXQcg1PeiTGPsinrhpcqRlqd8vECnzQeqGA0ee";
//   let date = document.querySelector("input").value;
//   const url = `https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=${date}`;

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       document.querySelector("img").src = data.url;
//     });
// }

document.querySelector("button").addEventListener("click", jsonPost);

function jsonPost() {
  let url = "https://jsonplaceholder.typicode.com/users";
  let newPost = {
    name: "Slim Shady",
    user: "MM",
    email: "therealslimshady@eminem.com",
    address: {
      street: "Hollywood Drive",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "27.8794",
        lng: "25.1234",
      },
    },
    phone: "905.451.8212",
    website: "eminem.io",
    company: {
      name: "eminems Group",
      catchPhrase: "I'm gay",
      bs: "Please stand up",
    },
  };

  fetch(url, {
    method: "Post",
    body: JSON.stringify(newPost),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
