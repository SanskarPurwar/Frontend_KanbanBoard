const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// API routes (you can add your API endpoints here if needed)
app.get('/api', (req, res) => {
    res.json({ message: "API is working!" });
});

// Catch-all handler to send React's index.html for any route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Define the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
