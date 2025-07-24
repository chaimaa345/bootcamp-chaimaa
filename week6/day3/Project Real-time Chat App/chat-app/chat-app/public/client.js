const socket = io();
const chatBox = document.getElementById('chatBox');
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const userList = document.getElementById('userList');

const username = localStorage.getItem('chatUsername');
if (!username) {
  window.location.href = '/';
} else {
  socket.emit('join', username);
}

messageForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message) {
    socket.emit('sendMessage', message);
    messageInput.value = '';
  }
});

socket.on('message', ({ user, text }) => {
  const div = document.createElement('div');
  div.textContent = `${user}: ${text}`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
});

socket.on('userList', users => {
  userList.innerHTML = '';
  users.forEach(u => {
    const li = document.createElement('li');
    li.textContent = u;
    userList.appendChild(li);
  });
});
