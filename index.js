const express = require('express');
const app = express();
const PORT = 3000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello World, Welcome ExpressJs');
});

app.listen(PORT, () => {
    console.log(`Server is runing on https://localhost:${PORT}`);
});
