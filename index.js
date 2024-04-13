const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const colors = require('./src/colors.json');
const app = express();
const port = 3000;

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Cores',
            version: '1.0.0',
            description: 'Uma API simples para consultar nomes de cores com base em códigos hexadecimais.',
        },
    },
    apis: ['index.js'],
};

const specs = swaggerJsdoc(options);

app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /cor/{hex}:
 *   get:
 *     summary: Retorna o nome da cor correspondente ao código hexadecimal fornecido.
 *     parameters:
 *       - in: path
 *         name: hex
 *         schema:
 *           type: string
 *         required: true
 *         description: Código hexadecimal da cor a ser consultada.
 *     responses:
 *       '200':
 *         description: Nome da cor correspondente ao código hexadecimal fornecido.
 */
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

/**
 * @swagger
 * /cores:
 *   get:
 *     summary: Retorna todas as cores disponíveis.
 *     responses:
 *       '200':
 *         description: Retorna todas as cores disponíveis e seus respectivos hexadecimais.
 */
app.get('/cores', (req, res) => {
    res.json(colors);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
