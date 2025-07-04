// Retrieve the div and console.log it
const containerDiv = document.getElementById("container");
console.log(containerDiv);

// Change “Pete” to “Richard”
const firstUl = document.querySelectorAll("ul")[0];
firstUl.children[1].textContent = "Richard";

// Delete the second <li> of the second <ul>
const secondUl = document.querySelectorAll("ul")[1];
secondUl.removeChild(secondUl.children[1]); // Removes "Sarah"

// Change the name of first <li> of each <ul> to your name
const uls = document.querySelectorAll("ul");
uls.forEach((ul) => {
  ul.children[0].textContent = "Chaimaa"; // ← put your name here
});

// Add class student_list to both <ul>
uls.forEach((ul) => {
  ul.classList.add("student_list");
});

// Add classes university and attendance to first <ul>
firstUl.classList.add("university", "attendance");

// Add a light blue background color and padding to the div
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

// Do not display <li> that contains “Dan”
const danLi = Array.from(secondUl.children).find(li => li.textContent === "Dan");
if (danLi) {
  danLi.style.display = "none";
}

// Add border to “Richard”
const richardLi = Array.from(firstUl.children).find(li => li.textContent === "Richard");
if (richardLi) {
  richardLi.style.border = "2px solid black";
}

// Change font size of the whole body
document.body.style.fontSize = "20px";

// Bonus: alert if background is light blue
if (containerDiv.style.backgroundColor === "lightblue") {
  // Get all <li> inside first ul
  const users = Array.from(firstUl.children).map(li => li.textContent);
  alert(`Hello ${users[0]} and ${users[1]}`);
}
