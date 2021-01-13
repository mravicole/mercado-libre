const express = require('express');
const app = express();

const path = require('path');

const expressStatic = express.static(path.resolve(__dirname, "public"));
app.use(expressStatic);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.listen(3000, () => {
    console.log("El puerto 3000 está encendido");
});