const fs = require('fs');

class ProductsManager {
    static #filePath = 'products.json';

    static create(data) {
        const products = ProductsManager.readFromFile();
        const newProduct = {
            id: products.length + 1,
            ...data
        };
        products.push(newProduct);
        ProductsManager.saveToFile(products);
        return newProduct;
    }

    static read() {
        return ProductsManager.readFromFile();
    }

    static readOne(id) {
        const products = ProductsManager.readFromFile();
        return products.find(product => product.id === id);
    }

    static destroy(id) {
        let products = ProductsManager.readFromFile();
        products = products.filter(product => product.id !== id);
        ProductsManager.saveToFile(products);
        return true;
    }

    static readFromFile() {
        try {
            const data = fs.readFileSync(ProductsManager.#filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }

    static saveToFile(data) {
        try {
            fs.writeFileSync(ProductsManager.#filePath, JSON.stringify(data, null, 2));
        } catch (error) {
            console.error('Error saving data to file:', error);
        }
    }
}

module.exports = ProductsManager;
