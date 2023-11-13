const express = require('express');
const path = require('path');
const routes = require('./routes');
const { prototype } = require('events');
const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.listen(PORT, () => 
console.log(`App now listening at http://localhost:${PORT}`)
)