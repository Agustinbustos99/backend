const ProductsManager = require('./productmanager');
const UsersManager = require('./UsersManager');

// instancia de ProductsManager
const productsManager = new ProductsManager();

// instancia de UsersManager
const usersManager = new UsersManager();

// usuarios de ejemplo
usersManager.create({ 
    name: 'Usuario 1',
    photo: 'ruta/de/imagen_usuario1.jpg',
    email: 'usuario1@example.com',
    password: 'contraseña123',
    role: 'cliente'
});
usersManager.create({ 
    name: 'Usuario 2',
    photo: 'ruta/de/imagen_usuario2.jpg',
    email: 'usuario2@example.com',
    password: 'contraseña456',
    role: 'administrador'
});

// productos de ejemplo
productsManager.create({ 
    title: 'Producto 1',
    photo: 'ruta/de/imagen1.jpg',
    category: 'Categoria 1',
    price: 10,
    stock: 100
});
productsManager.create({ 
    title: 'Producto 2',
    photo: 'ruta/de/imagen2.jpg',
    category: 'Categoria 2',
    price: 20,
    stock: 50
});
productsManager.create({ 
    title: 'Producto 3',
    photo: 'ruta/de/imagen3.jpg',
    category: 'Categoria 1',
    price: 15,
    stock: 80
});
productsManager.create({ 
    title: 'Producto 4',
    photo: 'ruta/de/imagen4.jpg',
    category: 'Categoria 3',
    price: 30,
    stock: 70
});
productsManager.create({ 
    title: 'Producto 5',
    photo: 'ruta/de/imagen5.jpg',
    category: 'Categoria 2',
    price: 25,
    stock: 60
});

// mostrar productos y usuarios creados
console.log('Productos:', productsManager.read());
console.log('Usuarios:', usersManager.read());
