import pool from '../config/db.js';

class FilmesService {
  async buscarTodosOsFilmes() {
    try {
      const resultado = await pool.query('SELECT * FROM filmes');
      return resultado.rows;
    } catch (error) {
      throw error;
    }
  }
}

export default new FilmesService();