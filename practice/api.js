// document.querySelector("button").addEventListener("click", getStockInfo);

// function getStockInfo() {
//   let ticker = document.querySelector("input").value;
//   let apikey = "TOY6Q1GZESECU7VJ";
  
//   const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${apikey}`;

//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       document.querySelector("h2").innerText = data.Name
//     })
// }

document.querySelector("button").addEventListener("click", getStockInfo);

function getStockInfo() {
  let ticker = document.querySelector("input").value;
  let apikey = "TOY6Q1GZESECU7VJ";

  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${apikey}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerText = data.Name;
    })
}
