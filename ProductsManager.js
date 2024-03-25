// ProductsManager.js

class ProductsManager {
    // Variable privada estática para almacenar productos
    static #products = [];

    // Método estático para crear un producto
    static createProduct(productData) {
        // Validación de campos requeridos
        if (!productData.title || !productData.price || !productData.category || !productData.stock) {
            throw new Error('Todos los campos son requeridos para crear un producto.');
        }

        const newProduct = {
            id: ProductsManager.#products.length + 1,
            ...productData
        };

        ProductsManager.#products.push(newProduct);
    }

    // Método estático para leer todos los productos
    static readProducts() {
        return ProductsManager.#products;
    }
}

module.exports = ProductsManager;
