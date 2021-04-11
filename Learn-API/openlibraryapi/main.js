// Enter an ISBN to return a book title. Store that title in localstorage.

document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const isbn = document.querySelector("input").value;
  const url = `https://openlibrary.org/isbn/${isbn}.json`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (!localStorage.getItem("books")) {
        localStorage.setItem("books", data.title);
      } else {
        let books = localStorage.getItem("books") + `, ${data.title}`
        localStorage.setItem("books", books)
      }
      console.log(data.title);

      document.querySelector("h2").innerText = localStorage.getItem("books")

      localStorage.setItem("books", title);
    });
}
