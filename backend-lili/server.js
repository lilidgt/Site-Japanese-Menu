const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

// react e node
app.use(cors()); 
// dados em json
app.use(express.json()); 

// config do bd att p o nome em inglês
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bonotee06!',
    database: 'japanese_foods' 
});

// test conexao
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no banco:', err);
    } else {
        console.log('Conectado ao banco de dados com sucesso!');
    }
});

// --- ROTAS DO CRUD ---

// 1. READ: O GET para listar itens.
app.get('/dishes', (req, res) => {
    const sql = 'SELECT * FROM dishes';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erro ao buscar pratos:', err);
            return res.status(500).json({ error: 'Database error while fetching dishes' });
        }
        res.json(results);
    });
});

// 2. CREATE: POST para adicionar um novo item.
app.post('/dishes', (req, res) => {
    const { name, category, price, description, is_available } = req.body;
    
    // Validação básica
    if (!name || !category || !price) {
        return res.status(400).json({ error: 'Name, category, and price are required.' });
    }

    const sql = 'INSERT INTO dishes (name, category, price, description, is_available) VALUES (?, ?, ?, ?, ?)';
    // Se 'is_available' não for enviado, o padrão será true
    const statusAvailable = is_available !== undefined ? is_available : true;

    db.query(sql, [name, category, price, description, statusAvailable], (err, result) => {
        if (err) {
            console.error('Erro ao adicionar prato:', err);
            return res.status(500).json({ error: 'Database error while saving the dish' });
        }
        res.status(201).json({ id: result.insertId, message: 'Dish added successfully!' });
    });
});

// 3. UPDATE: PUT para atualizar um item existente.
app.put('/dishes/:id', (req, res) => {
    const { id } = req.params;
    const { name, category, price, description, is_available } = req.body;
    
    const sql = 'UPDATE dishes SET name=?, category=?, price=?, description=?, is_available=? WHERE id=?';
    db.query(sql, [name, category, price, description, is_available, id], (err, result) => {
        if (err) {
            console.error('Erro ao atualizar prato:', err);
            return res.status(500).json({ error: 'Database error while updating the dish' });
        }
        res.json({ message: 'Dish updated successfully!' });
    });
});

// 4. DELETE: O DELETE para remover um item.
app.delete('/dishes/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM dishes WHERE id=?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Erro ao deletar prato:', err);
            return res.status(500).json({ error: 'Database error while deleting the dish' });
        }
        res.json({ message: 'Dish deleted successfully!' });
    });
});

// ligar servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});