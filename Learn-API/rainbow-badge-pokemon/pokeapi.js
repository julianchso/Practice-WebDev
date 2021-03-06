//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);
document.querySelector("button").addEventListener("click", clear);

let pokeImg = [];
let pokeType1 = [];
let pokeType2 = [];
let pokeType1Url = [];
let pokeType2Url = [];

function getFetch() {
  const poke1 = document.querySelector("#poke1").value;
  const poke2 = document.querySelector("#poke2").value;

  const url = `https://pokeapi.co/api/v2/pokemon/${poke1}`;
  const url2 = `https://pokeapi.co/api/v2/pokemon/${poke2}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      pokeImg.push(data.sprites.front_default);
      data.types.forEach((e) => {
        pokeType1.push(e.type.name);
        pokeType1Url.push(e.type.url);
      });

      pokeType1.push();
      document.querySelector("#pokeImg1").src = pokeImg[0];
      document.querySelector("#type1").innerHTML = pokeType1;
      console.log(pokeType1);

      // console.log(pokeImg)
      console.log(data);
      // console.log(data.types[0].type.name);

      fetch(url2)
        .then((res) => res.json())
        .then((data) => {
          pokeImg.push(data.sprites.front_default);
          data.types.forEach((e) => {
            pokeType2.push(e.type.name);
            pokeType2Url.push(e.type.url);
          });

          document.querySelector("#pokeImg2").src = pokeImg[1];
          document.querySelector("#type2").innerHTML = pokeType2;
          console.log(pokeType2);
        });
      console.log(pokeType1Url);
      return fetch(pokeType1Url[0]);
    })
    .then((res) => res.json())
    .then((typeData) => {
      console.log(typeData);
    });
  console.log(pokeType1);
  console.log(pokeType2);
}

function clear() {
  pokeImg = [];
  pokeType1 = [];
  pokeType2 = [];
}
