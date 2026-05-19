import { Router } from 'express';
import filmesService from '../services/filmes.service.js';

const router = Router();

router.get('/filmes', async (req, res) => {
  try {
    const filmes = await filmesService.buscarTodosOsFilmes();
    res.json(filmes);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar filmes' });
  }
});

export default router;