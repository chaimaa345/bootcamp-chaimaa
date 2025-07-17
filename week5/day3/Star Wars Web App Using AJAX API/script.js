const btn = document.getElementById("btn");
const nameEl = document.getElementById("name");
const heightEl = document.getElementById("height");
const genderEl = document.getElementById("gender");
const birthYearEl = document.getElementById("birthYear");
const homeWorldEl = document.getElementById("homeWorld");
const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");

async function fetchCharacter() {
  const id = Math.floor(Math.random() * 83) + 1;

  loadingEl.classList.remove("hidden");
  errorEl.classList.add("hidden");

  try {
    const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
    const data = await res.json();
    const character = data.result.properties;

    const homeworldRes = await fetch(character.homeworld);
    const homeworldData = await homeworldRes.json();

    nameEl.textContent = character.name;
    heightEl.textContent = character.height;
    genderEl.textContent = character.gender;
    birthYearEl.textContent = character.birth_year;
    homeWorldEl.textContent = homeworldData.result.properties.name;

  } catch (error) {
    console.error("Error:", error);
    errorEl.classList.remove("hidden");
    nameEl.textContent = "";
    heightEl.textContent = "";
    genderEl.textContent = "";
    birthYearEl.textContent = "";
    homeWorldEl.textContent = "";
  } finally {
    loadingEl.classList.add("hidden");
  }
}

btn.addEventListener("click", fetchCharacter);
