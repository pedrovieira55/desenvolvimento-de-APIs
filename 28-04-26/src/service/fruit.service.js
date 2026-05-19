import pool from '../config/db.js';

import { v4 as uuidv4 } from 'uuid';

class FruitService {    
    async create(nome) {
        const id = uuidv4();
        const result = await pool.query('INSERT INTO frutas (id, nome) VALUES ($1, $2) RETURNING *', [id, nome]);
        return result.rows[0];
    }

    async getAll() {
        const result = await pool.query('SELECT * FROM frutas');
        return result.rows;
    }

    async getById(id) {
        const result = await pool.query('SELECT * FROM frutas WHERE id = $1', [id]);
        return result.rows[0];
    }

    async update(id, nome) {
        const result = await pool.query('UPDATE frutas SET nome = $1 WHERE id = $2 RETURNING *', [nome, id]);
        return result.rows[0];
    }

    async delete(id) {
        const result = await pool.query('DELETE FROM frutas WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }
}