const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const form = document.getElementById("gifForm");
const input = document.getElementById("searchInput");
const container = document.getElementById("gifContainer");
const deleteBtn = document.getElementById("deleteAllBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searchTerm = input.value.trim();
  if (!searchTerm) return;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=25`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data = await response.json();

    container.innerHTML = ""; // clear previous results

    data.data.forEach(gif => {
      const gifUrl = gif.images.fixed_height.url;

      const img = document.createElement("img");
      img.src = gifUrl;
      img.alt = searchTerm;
      img.classList.add("gif");

      container.appendChild(img);
    });

  } catch (err) {
    console.error("Fetch error:", err);
    container.innerHTML = `<p style="color:red">Failed to fetch GIFs.</p>`;
  }
});

deleteBtn.addEventListener("click", () => {
  container.innerHTML = "";
});
