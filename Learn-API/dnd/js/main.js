// //Example fetch using DnD5eAPI - place subclasses in ul
// document.querySelector("button").addEventListener("click", getFetch);

// function getFetch() {
//   const choice = document.querySelector("input").value;
//   const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

//   fetch(url)
//     .then((res) => res.json()) // parse response as JSON
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(`error ${err}`);
//     });
// }

document.querySelector("button").addEventListener("click", clear);
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      document.querySelector(".spellName").innerHTML = data.name;

      data["classes"].forEach((e) => {
        const li = document.createElement("li");
        li.textContent = e.name;
        document.querySelector(".class").appendChild(li);
      });

      data["subclasses"].forEach((e) => {
        const li = document.createElement("li");
        li.textContent = e.name;
        document.querySelector(".subclass").appendChild(li);
      });
    });
}

function clear() {
  document.querySelector(".class").innerHTML = "";
  document.querySelector(".subclass").innerHTML = "";
}
