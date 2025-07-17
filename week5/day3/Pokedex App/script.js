document.addEventListener("DOMContentLoaded", function () {
  let currentId = 25;

  async function fetchPokemon(id) {
    try {
      showLoading();
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!res.ok) throw new Error("Not found");
      const data = await res.json();
      displayPokemon(data);
      currentId = data.id;
    } catch {
      showError();
    }
  }

  function displayPokemon(data) {
    document.getElementById("name").textContent = capitalize(data.name);
    document.getElementById("id").textContent = data.id;
    document.getElementById("height").textContent = `${data.height} cm`;
    document.getElementById("weight").textContent = `${data.weight} gr`;
    document.getElementById("type").textContent = data.types[0].type.name;
    document.getElementById("sprite").src = data.sprites.front_default;
  }

  function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1;
    fetchPokemon(randomId);
  }

  function showLoading() {
    document.getElementById("name").textContent = "Loading...";
    document.getElementById("sprite").src = "";
  }

  function showError() {
    document.getElementById("name").textContent = "Oh no! That Pokémon isn’t available…";
    document.getElementById("sprite").src = "";
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  document.getElementById("random").addEventListener("click", fetchRandomPokemon);
  document.getElementById("prev").addEventListener("click", () => {
    if (currentId > 1) fetchPokemon(currentId - 1);
  });
  document.getElementById("next").addEventListener("click", () => {
    fetchPokemon(currentId + 1);
  });

  fetchPokemon(currentId);
});


