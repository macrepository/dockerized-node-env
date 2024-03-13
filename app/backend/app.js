const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', (req, res) => {
    res.send('hello world!');
});

// Catch No-Route
app.all('*', (req, res) => {
    res.send('<h1>Pgae not found!</h1>');
});

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    // Clean up resources, close connections, etc here
    process.exit();
});

const port = process.env.BACKEND_PORT || 3001;
app.listen(port, () => console.log(`Connected on port ${port}`));