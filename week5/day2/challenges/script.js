const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gifForm");
const input = document.getElementById("searchInput");
const container = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (query === "") return;

  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${query}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch GIF");

    const data = await response.json();
    const gifUrl = data.data.images.fixed_height.url;

    appendGif(gifUrl);
    input.value = ""; // Clear input after search
  } catch (err) {
    alert("Error fetching GIF. Try again.");
    console.error(err);
  }
});

function appendGif(url) {
  const box = document.createElement("div");
  box.className = "gif-box";

  const img = document.createElement("img");
  img.src = url;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";
  deleteBtn.onclick = () => box.remove();

  box.appendChild(img);
  box.appendChild(deleteBtn);
  container.appendChild(box);
}

deleteAllBtn.addEventListener("click", () => {
  container.innerHTML = "";
});
