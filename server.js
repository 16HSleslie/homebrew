const express = require('express');
const app = express();
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    const route = path.join(__dirname, '/pages/index.html');
    res.sendFile(route, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent: index.html')
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at https://${hostname}:${port}`);
});