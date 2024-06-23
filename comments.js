// Create web server
// 1. Import express module
// 2. Create an express application
// 3. Create a route for GET request to /comments
// 4. Send a response with a message
// 5. Listen on port 3000

// 1. Import express module
const express = require('express');

// 2. Create an express application
const app = express();

// 3. Create a route for GET request to /comments
app.get('/comments', (req, res) => {
  // 4. Send a response with a message
  res.send('This is a GET request to /comments');
});

// 5. Listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Run the server with node comments.js
// Open the browser and navigate to http://localhost:3000/comments
// You should see the message "This is a GET request to /comments"

// You can also use curl to make a GET request to the server
// curl http://localhost:3000/comments
// You should see the message "This is a GET request to /comments"

// To stop the server, press Ctrl + C in the terminal
// You should see "Server is running on port 3000" and the server will stop

// Summary:
// - We created a simple web server using Express
// - We created a route for GET request to /comments
// - We sent a response with a message
// - We listened on port 3000
// - We tested the server using the browser and curl
// - We stopped the server using Ctrl + C