import express from 'express';

import filmesRoutes from './routes/filmes.route.js'; 

const app = express();

app.use(express.json());

app.use(filmesRoutes); 

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/filmes`);
});