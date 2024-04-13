const express = require('express');
const colors = require('./src/colors.json');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html');
});

app.get('/cor/:hex', (req, res) => {
    let { hex } = req.params;

    if (!hex.startsWith('#')) {
        hex = `#${hex}`;
    }

    const color = colors.find(c => c.hex.toLowerCase() === hex.toLowerCase());

    if (!color) {
        return res.status(404).send('Cor não encontrada');
    }

    res.json({ nome: color.nome });
});

app.get('/cores', (req, res) => {
    res.json(colors);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app;
