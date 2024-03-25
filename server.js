const express = require('express');
const ProductsManager = require('./memory/ProductsManager');
const UsersManager = require('./memory/UsersManager');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta GET /api/products para leer todos los productos
app.get('/api/products', (req, res) => {
    const products = ProductsManager.read();
    res.json(products);
});

// Ruta GET /api/products también sirve para filtrar por categoría
app.get('/api/products/:category', (req, res) => {
    const category = req.params.category;
    const products = ProductsManager.filterByCategory(category);
    res.json(products);
});

// Ruta GET /api/products/:uid para buscar un producto (con ese id)
app.get('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const product = ProductsManager.readOne(id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Ruta GET /api/users para leer todos los usuarios
app.get('/api/users', (req, res) => {
    const users = UsersManager.read();
    res.json(users);
});

// Ruta GET /api/users también sirve para filtrar por rol
app.get('/api/users/:role', (req, res) => {
    const role = req.params.role;
    const users = UsersManager.filterByRole(role);
    res.json(users);
});

// Ruta GET /api/users/:uid para buscar un usuario (con ese id)
app.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const user = UsersManager.readOne(id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
