// date.js

function getTimeUntilNewYear() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const jan1 = new Date(`${nextYear}-01-01T00:00:00`);

  const diffMs = jan1 - now;

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const diffSeconds = Math.floor((diffMs / 1000) % 60);

  return `The 1st January is in ${diffDays} days and ${String(diffHours).padStart(2, '0')}:${String(diffMinutes).padStart(2, '0')}:${String(diffSeconds).padStart(2, '0')} hours.`;
}

module.exports = getTimeUntilNewYear;
