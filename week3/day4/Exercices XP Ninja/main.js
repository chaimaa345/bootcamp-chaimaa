function calculateTip() {
  // Get values
  const billAmount = document.getElementById("billAmt").value;
  const serviceQuality = document.getElementById("serviceQual").value;
  let numberOfPeople = document.getElementById("numOfPeople").value;

  // Check if bill or service quality is missing
  if (billAmount === "" || serviceQuality == 0) {
    alert("Please enter a bill amount and select service quality.");
    return;
  }

  // Default to 1 if people input is empty or invalid
  if (numberOfPeople === "" || numberOfPeople < 1) {
    numberOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "inline";
  }

  // Calculate the tip
  let total = (billAmount * serviceQuality) / numberOfPeople;
  total = total.toFixed(2); // Round to 2 decimals

  // Display the result
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").textContent = `€${total}`;
}

// Attach event listener when page is ready
document.getElementById("calculate").onclick = calculateTip;
