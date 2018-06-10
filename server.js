const express = require('express');
const path = require('path');
const moltin = require('@moltin/sdk');
const setCookie = require('set-cookie');

const app = express();
const port = process.env.PORT || 5000;

const Moltin = moltin.gateway({
    client_id: process.env.REACT_APP_MOLTIN_CLIENT_ID || "Nein",
    client_secret: process.env.REACT_APP_CLIENT_SECRET || "Nein"
});

app.use(express.static(path.join(__dirname, 'client', 'build')));



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));