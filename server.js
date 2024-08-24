const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');

const app = express();
const PORT = 3000;


// Configurar o body-parser para lidar com dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para receber os dados do formulário
app.post('/submit', (req, res) => {
    res.header("Access-Control-Allow-Origem", "*");
    res.header("Access-Control-Allow-Methods", 'Get,Put,Post,Delite')
    app.use(cors());

    const { nome, code, litros, hora, data } = req.body;
    console.log('Nome:', nome);
    console.log('Code:', code);
    console.log('Litros:', litros);
    console.log('Hora:', hora);
    console.log('Data:', data);


    // Verificar se os campos necessários foram fornecidos
    if (!nome || !code || !litros || !hora || !data) {
        return res.status(400).json({ message: 'Dados recebidos com sucesso.'});
    }

    // Responder ao cliente
    res.json({ message: 'Dados recebidos com sucesso!' });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}');
});