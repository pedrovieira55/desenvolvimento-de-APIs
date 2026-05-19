import express from 'express';
import { fruitService } from '../service/fruit.service.js';

const route = express.Router();

// GET - Listar todas
route.get("/", async (req, res) => {
    try {
        const data = await fruitService.getAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar frutas", error: error.message });
    }
});

// GET - Buscar por ID
route.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const fruit = await fruitService.getById(id);
        
        if (!fruit) {
            return res.status(404).json({ message: "Fruta não encontrada" });
        }
        res.json(fruit);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar fruta", error: error.message });
    }
});

// POST - Criar nova fruta
route.post("/", async (req, res) => {
    try {
        const { nome } = req.body;
        if (!nome) {
            return res.status(400).json({ message: "O nome da fruta é obrigatório" });
        }
        
        const newFruit = await fruitService.create(nome);
        res.status(201).json(newFruit);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar fruta", error: error.message });
    }
});

// PUT - Atualizar fruta (substituição completa)
route.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nome } = req.body;

        if (!nome) {
            return res.status(400).json({ message: "O nome da fruta é obrigatório" });
        }

        const updatedFruit = await fruitService.update(id, nome);
        if (!updatedFruit) {
            return res.status(404).json({ message: "Fruta não encontrada" });
        }

        res.json(updatedFruit);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar fruta", error: error.message });
    }
});

// PATCH - Atualização parcial (como só temos 'nome', a lógica é a mesma do PUT)
route.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nome } = req.body;

        if (!nome) {
            return res.status(400).json({ message: "O nome da fruta é obrigatório" });
        }

        const updatedFruit = await fruitService.update(id, nome);
        if (!updatedFruit) {
            return res.status(404).json({ message: "Fruta não encontrada" });
        }

        res.json(updatedFruit);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar fruta", error: error.message });
    }
});

// DELETE - Deletar fruta
route.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFruit = await fruitService.delete(id);

        if (!deletedFruit) {
            return res.status(404).json({ message: "Fruta não encontrada" });
        }

        res.json({ message: "Fruta deletada com sucesso", fruta: deletedFruit });
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar fruta", error: error.message });
    }
});

export default route;