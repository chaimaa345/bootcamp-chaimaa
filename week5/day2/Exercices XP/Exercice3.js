const fetchStarship = async () => {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const starship = data.result;
    const details = starship.properties;

    console.log("Name:", details.name);
    console.log("Model:", details.model);
    console.log("Manufacturer:", details.manufacturer);
    console.log("Cost in Credits:", details.cost_in_credits);
    console.log("Cargo Capacity:", details.cargo_capacity);

  } catch (error) {
    console.error("Error fetching Star Wars data:", error.message);
  }
};

fetchStarship();

