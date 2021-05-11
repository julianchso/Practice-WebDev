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

// async function myFetch() {
//   let response = await fetch("coffee.jpg");
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   return await response.blob();
// }

// myFetch()
//   .then((blob) => {
//     let objectURL = URL.createObjectURL(blob);
//     let image = document.createElement("img");
//     image.src = objectURL;
//     document.body.appendChild(image);
//   })
//   .catch((e) => console.log(e));

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject(`Error: Something went wrong`);
      }
    }, 2000);
  });
}

// createPost({ title: "Post Three", body: "This is post three" })
//   .then(getPosts)
//   .catch(message => {console.log(message)});

// Promise.all

const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Goodbye");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
