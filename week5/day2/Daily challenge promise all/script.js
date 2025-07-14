const form = document.getElementById("sunriseForm");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const lat1 = document.getElementById("lat1").value;
  const lng1 = document.getElementById("lng1").value;
  const lat2 = document.getElementById("lat2").value;
  const lng2 = document.getElementById("lng2").value;

  const url1 = `https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lng1}&formatted=0`;
  const url2 = `https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}&formatted=0`;

  try {
    const [res1, res2] = await Promise.all([
      fetch(url1).then(res => res.json()),
      fetch(url2).then(res => res.json())
    ]);

    const sunrise1 = new Date(res1.results.sunrise).toLocaleTimeString();
    const sunrise2 = new Date(res2.results.sunrise).toLocaleTimeString();

    resultsDiv.innerHTML = `
      🌅 <strong>City 1 Sunrise:</strong> ${sunrise1}<br>
      🌅 <strong>City 2 Sunrise:</strong> ${sunrise2}
    `;
  } catch (error) {
    resultsDiv.innerHTML = `<span style="color:red">Error fetching sunrise data.</span>`;
    console.error("Fetch error:", error);
  }
});
