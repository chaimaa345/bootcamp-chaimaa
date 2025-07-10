const quotes = [
  { id: 0, quote: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.", author: "Charles Lindbergh", likes: 0 },
  { id: 1, quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", likes: 0 },
  { id: 2, quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein", likes: 0 },
  { id: 3, quote: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison", likes: 0 }
];

let filteredQuotes = [];
let currentQuoteIndex = 0;

// Function to display a quote
function displayFilteredQuote(index) {
  const quoteObj = filteredQuotes[index];
  document.getElementById("quoteText").textContent = quoteObj.quote;
  document.getElementById("quoteAuthor").textContent = quoteObj.author;
}

// Form submit: filter quotes by author
document.getElementById("filterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const authorInput = document.getElementById("authorSearch").value.trim().toLowerCase();

  filteredQuotes = quotes.filter(q => q.author.toLowerCase().includes(authorInput));

  if (filteredQuotes.length > 0) {
    currentQuoteIndex = 0;
    displayFilteredQuote(currentQuoteIndex);
  } else {
    document.getElementById("quoteText").textContent = "No quotes found for this author.";
    document.getElementById("quoteAuthor").textContent = "";
  }
});

// Previous quote
document.getElementById("prevBtn").addEventListener("click", () => {
  if (filteredQuotes.length === 0) return;
  currentQuoteIndex = (currentQuoteIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
  displayFilteredQuote(currentQuoteIndex);
});

// Next quote
document.getElementById("nextBtn").addEventListener("click", () => {
  if (filteredQuotes.length === 0) return;
  currentQuoteIndex = (currentQuoteIndex + 1) % filteredQuotes.length;
  displayFilteredQuote(currentQuoteIndex);
});
