// date-operations.js
const { format, addDays } = require('date-fns');

function displayFormattedDate() {
  const now = new Date(); // Current date and time
  const futureDate = addDays(now, 5); // Add 5 days
  const formatted = format(futureDate, 'yyyy-MM-dd HH:mm:ss'); // Format date

  console.log('Formatted date (5 days from now):', formatted);
}

// Export the function for use in app.js
module.exports = displayFormattedDate;
