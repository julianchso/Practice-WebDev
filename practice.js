// let promise = new Promise(function (resolve, reject) {
//   let x = 0;
//   if (x == 1) {
//     resolve("done");
//   } else {
//     reject(new Error("..."));
//   }
// });

// console.log(promise);

// let promise = new Promise(function(resolve, reject) {
//   try {
//     setTimeout(() => {
//       reject(new Error("Whoops"))
//     }, 1000);
//   }
//   catch(err) {
//     return `Error: ${err}`
//   }
// })

// promise.then(
//   result => console.log(result),
//   error => console.log(error)
// );

// let promise = new Promise ((resolve, reject) {
//   setTimeout(() => {
//     resolve("result")
//   }, 2000)
//   .finally(() => cono)
// })

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("result")
//   }, 2000)
// })
//   .finally(() => console.log("Promise ready"))
//   .catch(err => console.log(err));

// console.log(promise)

// // callback function

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error: ${src}`));

//   document.head.append(script);
// }

// // promises

// function loadScript(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Script load error for ${src}`));

//     document.head.append(script);
//   });
// }

// let promise = loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
// );

// promise.then(
//   (script) => console.log(`${script.src} is loaded!`),
//   (error) => console.log(`Error: ${error.message}`)
// );

// promise.then((script) => console.log("Another handler..."));


function delay(ms) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("result")
    }, ms);
  })
}

delay(3000).then(() => alert('runs after 3 seconds'));

