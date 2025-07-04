// 1. Planets as an array of objects (so we can include moons)
const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "orange", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "brown", moons: 79 },
  { name: "Saturn", color: "goldenrod", moons: 82 },
  { name: "Uranus", color: "lightblue", moons: 27 },
  { name: "Neptune", color: "darkblue", moons: 14 }
];

// 2. Select the section where planets will go
const section = document.querySelector(".listPlanets");
//we use an array of objects. Each object holds:
// - name: the planet’s name
// - color: the color to display
// - moons: how many moons the planet has

// 3. Loop through each planet
planets.forEach((planet) => {
  // Create the planet <div>
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.textContent = planet.name;

  // 4. Add moons
  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");

    // Random moon position around the planet
    moon.style.top = `${Math.random() * 80}px`;
    moon.style.left = `${Math.random() * 80}px`;

    planetDiv.appendChild(moon);
  }

  // 5. Append planet to the section
  section.appendChild(planetDiv);
});
