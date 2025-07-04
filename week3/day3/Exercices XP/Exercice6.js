// 1. Change the id from "navBar" to "socialNetworkNavigation"
const navBarDiv = document.getElementById("navBar");
navBarDiv.setAttribute("id", "socialNetworkNavigation");

// 2. Create a new <li> element
const newLi = document.createElement("li");

// 3. Create a text node with "Logout"
const logoutText = document.createTextNode("Logout");

// 4. Append the text node to the <li>
newLi.appendChild(logoutText);

// 5. Append the new <li> to the <ul>
const ul = document.querySelector("#socialNetworkNavigation ul");
ul.appendChild(newLi);

// 6. Use firstElementChild and lastElementChild to display text
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log("First link text:", firstLi.textContent); // Output: "Profile"
console.log("Last link text:", lastLi.textContent);   // Output: "Logout"
