//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

let pokeImg = [];
let pokeType1 = [];
let pokeType2 = [];

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
      });
      console.log(pokeType1);

      pokeType1.push();
      document.querySelector("#pokeImg1").src = pokeImg[0];

      // console.log(pokeImg)
      console.log(data);
      // console.log(data.types[0].type.name);

      fetch(url2)
        .then((res) => res.json())
        .then((data) => {
          pokeImg.push(data.sprites.front_default);
          data.types.forEach((e) => {
            pokeType2.push(e.type.name);
          });
          console.log(pokeType2);

          document.querySelector("#pokeImg2").src = pokeImg[1];
        });
      // fetch image and type of pokemon

      // fetch type to decide if it's super effective
    });
}
