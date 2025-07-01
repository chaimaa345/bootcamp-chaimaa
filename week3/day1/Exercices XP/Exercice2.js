const colors = ["blue", "seagreen", "white", "purple", "black"];
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

const suffixes = ["st", "nd", "rd", "th", "th"]; // up to 5

for (let i = 0; i < colors.length; i++) {
  const position = i + 1;
  const suffix = suffixes[i] || "th"; // fallback in case array grows
  console.log(`My ${position}${suffix} choice is ${colors[i]}`);
}

