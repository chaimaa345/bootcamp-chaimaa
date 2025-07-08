(function(username) {
  const navbar = document.getElementById('navbar');

  const userDiv = document.createElement('div');
  userDiv.className = 'user-profile';

  const img = document.createElement('img');
  img.src = 'https://i.pravatar.cc/150?u=' + username; // Random profile pic

  const name = document.createElement('span');
  name.textContent = username;

  userDiv.appendChild(img);
  userDiv.appendChild(name);
  navbar.appendChild(userDiv);
})('John');
