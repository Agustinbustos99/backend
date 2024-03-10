class ProductsManager {
    constructor() {
        this._products = []; // variable privada para almacenar los productos
        this._productIdCounter = 1; // contador para el ID de productos
    }

    create(productData) {
        const newProduct = {
            id: this._productIdCounter++,
            ...productData
        };

        this._products.push(newProduct);
    }

    read() {
        return this._products;
    }
}

module.exports = ProductsManager;
