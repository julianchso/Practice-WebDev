// document.addEventListener("click", () => {
//   box = document.querySelector(".box");

//   box.style.transform = "translateX(1000px)";
//   box.style.transform = "transform 1s ease-in-out";

//   requestAnimationFrame(() => {
//     requestAnimationFrame(() => {
//       box.style.transform = "translateX(500px)";
//     });
//   });
// });

document.addEventListener("click", () => {
  button = document.querySelector(".button");
  Promise.resolve().then(() => {
    console.log("Microtask 1");
  });
  console.log("Listener 1");
});

document.addEventListener("click", () => {
  button = document.querySelector(".button");
  Promise.resolve().then(() => {
    console.log("Microtask 2");
  });
  console.log("Listener 2");
});
