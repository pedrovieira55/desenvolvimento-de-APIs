import express from 'express';
import 'dotenv/config';
import frutasRouter from './routes/frutas.routes.js';

const app = express();
const PORT = process.env.API_PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    return res.json("Hello World!");
});

app.use('/frutas', frutasRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});