const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const fromSelect = document.getElementById('from-currency');
const toSelect = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('result');
const convertBtn = document.getElementById('convert-btn');
const switchBtn = document.getElementById('switch-btn');

// Load all currencies and populate dropdowns
async function loadCurrencies() {
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
    const data = await response.json();
    const codes = data.supported_codes;

    codes.forEach(([code, name]) => {
      const optionFrom = document.createElement('option');
      optionFrom.value = code;
      optionFrom.textContent = `${code} - ${name}`;
      fromSelect.appendChild(optionFrom);

      const optionTo = document.createElement('option');
      optionTo.value = code;
      optionTo.textContent = `${code} - ${name}`;
      toSelect.appendChild(optionTo);
    });

    // Optional default selections
    fromSelect.value = 'USD';
    toSelect.value = 'ILS';
  } catch (error) {
    console.error("Error loading currencies:", error);
  }
}

// Convert currency and show result
async function convertCurrency() {
  const from = fromSelect.value;
  const to = toSelect.value;
  const amount = parseFloat(amountInput.value);

  if (!amount || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount!";
    return;
  }

  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`);
    const data = await response.json();

    if (data.conversion_result) {
      resultDiv.textContent = `${data.conversion_result.toFixed(2)} ${to}`;
    } else {
      resultDiv.textContent = "Conversion failed. Please check currencies.";
    }
  } catch (error) {
    console.error("Error converting currency:", error);
    resultDiv.textContent = "Error fetching conversion data.";
  }
}

// Switch currencies
function switchCurrencies() {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
}

// Add event listeners
convertBtn.addEventListener('click', convertCurrency);

switchBtn.addEventListener('click', () => {
  switchCurrencies();
  convertCurrency();
});

// Initial load
loadCurrencies();
