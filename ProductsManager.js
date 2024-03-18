class ProductsManager {
    
    static #products = [];

    
    static createProduct(productData) {
       
        if (!productData.title || !productData.price || !productData.category || !productData.stock) {
            throw new Error('Todos los campos son requeridos para crear un producto.');
        }

        const newProduct = {
            id: ProductsManager.#products.length + 1,
            ...productData
        };

        ProductsManager.#products.push(newProduct);
    }

   
    static readProducts() {
        return ProductsManager.#products;
    }
}

module.exports = ProductsManager;


