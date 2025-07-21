// date.js

function getNextHolidayInfo() {
  const now = new Date();

  // Hardcoded next holiday (e.g., Christmas)
  const holidayDate = new Date(`${now.getFullYear()}-12-25T00:00:00`);
  const holidayName = "Christmas";

  // If holiday is in the past this year, use next year
  if (holidayDate < now) {
    holidayDate.setFullYear(holidayDate.getFullYear() + 1);
  }

  const diffMs = holidayDate - now;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const diffSeconds = Math.floor((diffMs / 1000) % 60);

  const today = now.toDateString();

  return `Today is ${today}.\nThe next holiday is ${holidayName} in ${diffDays} days and ${String(diffHours).padStart(2, '0')}:${String(diffMinutes).padStart(2, '0')}:${String(diffSeconds).padStart(2, '0')} hours.`;
}

module.exports = getNextHolidayInfo;
