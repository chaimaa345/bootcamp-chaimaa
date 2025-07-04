// 1. Create an array of book objects
const allBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://m.media-amazon.com/images/I/41aQPTCmeVL.jpg",
    alreadyRead: true
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg",
    alreadyRead: false
  }
];

// 2. Select the section where books will be displayed
const bookSection = document.querySelector(".listBooks");

// 3. Loop through the books and create elements
allBooks.forEach(book => {
  // Create a <div> for each book
  const bookDiv = document.createElement("div");

  // Create a <p> element with title and author
  const bookInfo = document.createElement("p");
  bookInfo.textContent = `${book.title} written by ${book.author}`;

  // If already read, change color to red
  if (book.alreadyRead) {
    bookInfo.style.color = "red";
  }

  // Create an <img> element for the book cover
  const bookImg = document.createElement("img");
  bookImg.src = book.image;
  bookImg.style.width = "100px";

  // Append <p> and <img> to the <div>
  bookDiv.appendChild(bookInfo);
  bookDiv.appendChild(bookImg);

  // Append the book <div> to the section
  bookSection.appendChild(bookDiv);
});
