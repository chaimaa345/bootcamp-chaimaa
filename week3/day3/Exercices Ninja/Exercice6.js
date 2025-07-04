function createCalendar(year, month) {
  // Create table and table header
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  const days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  // Create weekday headers
  for (let day of days) {
    const th = document.createElement('th');
    th.textContent = day;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  // Create date object for the first day of the month
  const date = new Date(year, month - 1, 1); // month is 0-based in JS

  // Adjust for Monday-first start (getDay: Sunday = 0)
  let startDay = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
  startDay = (startDay === 0) ? 6 : startDay - 1; // Make Monday = 0

  let row = document.createElement('tr');

  // Fill empty <td> before the 1st of the month
  for (let i = 0; i < startDay; i++) {
    row.appendChild(document.createElement('td'));
  }

  // Loop through all days in the month
  while (date.getMonth() === month - 1) {
    const td = document.createElement('td');
    td.textContent = date.getDate();
    row.appendChild(td);

    // If Sunday (after Monday=0 shift), start new row
    if ((date.getDay() + 6) % 7 === 6) {
      table.appendChild(row);
      row = document.createElement('tr');
    }

    date.setDate(date.getDate() + 1); // move to next day
  }

  // Append the last row if it has remaining cells
  if (row.children.length > 0) {
    table.appendChild(row);
  }

  // Add table to the body
  document.body.appendChild(table);
}

// ✅ Example usage:
createCalendar(2012, 9); // September 2012
