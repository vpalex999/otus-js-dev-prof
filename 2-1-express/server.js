const express = require('express');
const path = require('node:path');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/hello', (req, res) => {
    res.send('Hello ' + req.query.name);
});

app.get('/hello/:id', (req, res) => {
    res.send('Hello id: ' + req.params.id);
});

app.get('/person', (req, res) => {
    res.json({ name: 'Oleg' });
});

app.get('/index', (req, res) => {
    res.sendFile(path.resolve('index.html'));
});

app.get('/nocontent', (req, res) => {
    res.sendStatus(204);
});

app.listen(3000, () => console.log('Hello from 3000'));
