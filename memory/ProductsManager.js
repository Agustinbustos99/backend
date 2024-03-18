class ProductsManager {
    static #products = [];

    static create(data) {
        const newProduct = {
            id: ProductsManager.#products.length + 1,
            ...data
        };
        ProductsManager.#products.push(newProduct);
        return newProduct;
    }

    static read() {
        return ProductsManager.#products;
    }

    static readOne(id) {
        return ProductsManager.#products.find(product => product.id === id);
    }

    static destroy(id) {
        const index = ProductsManager.#products.findIndex(product => product.id === id);
        if (index !== -1) {
            ProductsManager.#products.splice(index, 1);
            return true;
        }
        return false;
    }
}


ProductsManager.create({
    title: 'Manzana',
    description: 'Manzana fresca y jugosa',
    price: 2.5, // Precio por unidad
    stock: 100
});
ProductsManager.create({
    title: 'Banana',
    description: 'Banana madura y deliciosa',
    price: 1.8,
    stock: 150
});
ProductsManager.create({
    title: 'Lechuga',
    description: 'Lechuga verde y crujiente',
    price: 3.2,
    stock: 80
});
ProductsManager.create({
    title: 'Pollo',
    description: 'Pollo fresco y magro',
    price: 8.5,
    stock: 50
});
ProductsManager.create({
    title: 'Arroz',
    description: 'Arroz blanco y suave',
    price: 4.0,
    stock: 120
});
ProductsManager.create({
    title: 'Pasta',
    description: 'Pasta italiana al dente',
    price: 2.7,
    stock: 100
});
ProductsManager.create({
    title: 'Queso',
    description: 'Queso cheddar cremoso',
    price: 5.5,
    stock: 60
});
ProductsManager.create({
    title: 'Pan',
    description: 'Pan recién horneado',
    price: 2.0,
    stock: 200
});
ProductsManager.create({
    title: 'Huevos',
    description: 'Huevos frescos de granja',
    price: 3.8,
    stock: 80
});
ProductsManager.create({
    title: 'Yogur',
    description: 'Yogur natural y cremoso',
    price: 1.2,
    stock: 120
});

module.exports = ProductsManager;

