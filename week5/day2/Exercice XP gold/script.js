const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.trim();
  if (!query) return;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=25`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.data.length === 0) {
      gifContainer.innerHTML = "<p>No GIFs found.</p>";
      return;
    }

    const randomIndex = Math.floor(Math.random() * data.data.length);
    const gifUrl = data.data[randomIndex].images.fixed_height.url;

    gifContainer.innerHTML = `<img src="${gifUrl}" alt="Random GIF">`;

  } catch (error) {
    console.error("Error fetching GIF:", error);
    gifContainer.innerHTML = `<p style="color:red">Failed to load GIF.</p>`;
  }
});

