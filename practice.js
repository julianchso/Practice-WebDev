fetch("coffee.jpg")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.blob();
  })
  .then((myBlob) => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.log(
      "There has been a problem with your fetch operation: " + e.message
    );
  });

async function myFetch() {
  let response = await fetch("coffee.jpg");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let myBlob = await response.blob();

  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement("img");
  image.src = objectURL;
  document.body.appendChild(image);
}

myFetch().catch((e) => {
  console.log(
    "There has been a problem with your fetch oepration: " + e.message
  );
});

// Learn: JS All Lies
// Learn: Call Stack / Task Queue
// Learn: Event Loop
// Learn: Node
// Homework - Coin Flip & RPS

// The event loop monitors the callback queue and the job queue and decides what needs to be pushed to the call stack.