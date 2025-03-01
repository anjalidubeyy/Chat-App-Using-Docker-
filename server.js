require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Serve static files from "public" folder
app.use(express.static('public'));

// Handle socket connections
io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Broadcast message to all users
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
