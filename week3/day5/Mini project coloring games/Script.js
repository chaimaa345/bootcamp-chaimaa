const paletteColors = [
  "red", "orange", "gold",
  "yellow", "yellowgreen", "lightgreen",
  "green", "turquoise", "cyan",
  "lightskyblue", "dodgerblue", "blue",
  "navy", "purple", "mediumvioletred",
  "violet", "pink", "lightgray",
  "gray", "black", "white"
];

const palette = document.getElementById("palette");
const grid = document.getElementById("grid");
const clearBtn = document.getElementById("clearBtn");

let currentColor = "black";
let isDrawing = false;

// Create color buttons
paletteColors.forEach(color => {
  const colorDiv = document.createElement("div");
  colorDiv.classList.add("color");
  colorDiv.style.backgroundColor = color;
  colorDiv.setAttribute("data-color", color);

  colorDiv.addEventListener("click", () => {
    currentColor = color;
  });

  palette.appendChild(colorDiv);
});

// Create the drawing grid
for (let i = 0; i < 60 * 30; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mousedown", () => {
    isDrawing = true;
    square.style.backgroundColor = currentColor;
  });

  square.addEventListener("mouseover", () => {
    if (isDrawing) {
      square.style.backgroundColor = currentColor;
    }
  });

  grid.appendChild(square);
}

document.body.addEventListener("mouseup", () => {
  isDrawing = false;
});

// Clear grid button
clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".square").forEach(square => {
    square.style.backgroundColor = "white";
  });
});


