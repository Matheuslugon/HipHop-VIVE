const express = require('express');
const path = require('path');

// Inicializa o app Express
const app = express();

// Definir a pasta pública para servir o HTML, CSS e JS
app.use(express.static(path.join(__dirname)));

// Rota principal que vai servir o arquivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Porta onde o servidor será executado
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});