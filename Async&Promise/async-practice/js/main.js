//Code 01
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(){
//     console.log('Paper delivered to house 2')
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo()
// houseThree()

// // Code 02
// function houseOne() {
//   console.log("Paper delivered to house 1");
// }
// function houseTwo() {
//   setTimeout(() => console.log("Paper delivered to house 2"), 3000);
// }
// function houseThree() {
//   console.log("Paper delivered to house 3");
// }
// houseOne();
// houseTwo();
// houseThree();

//Code 03
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(callback){
//     setTimeout(() => {
//         console.log('Paper delivered to house 2')
//         callback()
//     }, 3000)
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo(houseThree)

//Code 04
// function houseOne(){
//     setTimeout(() => {
//         console.log('Paper delivered to house 1')
//         setTimeout(() => {
//             console.log('Paper delivered to house 2')
//             setTimeout(() => {
//                 console.log('Paper delivered to house 3')
//             }, 3000)
//         }, 4000)
//     }, 5000)
// }
// houseOne()

//Code 05
// const promise = new Promise((resolve, reject) => {
//     const error = false
//     if(!error){
//         resolve('Promise has been fullfilled')
//     }else{
//         reject('Error: Operation has failed')
//     }
// })
// console.log(promise)
// promise
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//Code 06
// function houseOne(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 1')
//         }, 1000)
//     })
// }
// function houseTwo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 2')
//         }, 5000)
//     })
// }
// function houseThree(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 3')
//         }, 2000)
//     })
// }
// houseOne()
//     .then(data => console.log(data))
//     .then(houseTwo)
//     .then(data => console.log(data))
//     .then(houseThree)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//Code 07
// function houseOne(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 1')
//         }, 1000)
//     })
// }
// function houseTwo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 2')
//         }, 5000)
//     })
// }
// function houseThree(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 3')
//         }, 2000)
//     })
// }

// async function getPaid(){
//     const houseOneWait = await houseOne()
//     const houseTwoWait = await houseTwo()
//     const houseThreeWait = await houseThree()
//     console.log(houseOneWait)
//     console.log(houseTwoWait)
//     console.log(houseThreeWait)
// }

// getPaid()

//Code 08
// async function getACuteDogPhoto(){
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)
// }
// getACuteDogPhoto()

// // using then

// fetch("coffee.jpg")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.blob();
//   })
//   .then((myBlob) => {
//     let objectURL = URL.createObjectURL(myBlob);
//     let image = document.createElement("img");
//     image.src = objectURL;
//     document.body.appendChild(image);
//   })
//   .catch((e) => {
//     console.log(
//       "There has been a problem with your fetch operation: " + e.message
//     );
//   });

// // using async await

// console.log('Synchronous 1');

// setTimeout(_ => console.log(`Timeout 2`), 0);

// Promise.resolve().then(_ => console.log('Promise'));

// console.log('Synchronous 4 ');

// const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");

// promise
//   .then((res) => res.json())
//   .then((user) => console.log(":D", user.title))
//   .catch((err) => console.error(err));

// console.log("Synchronous");

const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}`);

const codeBlocker = () => {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }

  return " ";
};

// log("Synchronous 1");
// log("while loop", codeBlocker());
// log("Synchronous 2");

const codeBlocker2 = () => {
  return new Promise((resolve, reject) => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    resolve("billion loops done");
  });
};

log("Synchronous 1");
codeBlocker2().then(log);
log("Synchronous 2");

const codeBlocker3 = () => {
  return Promise.resolve().then((v) => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return "billion loops done";
  });
};

// log("Synchronous 1");
// codeBlocker3().then(log);
// log("Synchronous 2");
