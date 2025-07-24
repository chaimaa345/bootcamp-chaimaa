const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const users = {}; // { socket.id: username }

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
  socket.on('join', username => {
    users[socket.id] = username;
    io.emit('userList', Object.values(users));
    socket.broadcast.emit('message', { user: 'System', text: `${username} joined the chat.` });
  });

  socket.on('sendMessage', message => {
    const user = users[socket.id];
    io.emit('message', { user, text: message });
  });

  socket.on('disconnect', () => {
    const user = users[socket.id];
    delete users[socket.id];
    io.emit('userList', Object.values(users));
    if (user) {
      io.emit('message', { user: 'System', text: `${user} left the chat.` });
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
