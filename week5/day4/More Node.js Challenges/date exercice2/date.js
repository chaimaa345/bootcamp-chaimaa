// date.js

function getMinutesLived(birthdateStr) {
  const birthDate = new Date(birthdateStr);
  const now = new Date();

  const diffMs = now - birthDate;
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  return `You have lived approximately ${diffMinutes.toLocaleString()} minutes.`;
}

module.exports = getMinutesLived;

