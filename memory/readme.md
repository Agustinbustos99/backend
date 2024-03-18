# ProductsManager

## Descripción
ProductsManager es un programa que permite gestionar productos. Proporciona funciones para crear, leer, actualizar y eliminar productos, así como almacenarlos en un archivo.

## Uso

### Crear un producto
Para crear un nuevo producto, utiliza el método `create(data)` proporcionando los detalles del producto, como título, descripción, precio y stock.

Ejemplo:
```javascript
ProductsManager.create({
    title: 'Smartphone',
    description: 'Teléfono inteligente de última generación',
    price: 799,
    stock: 50
});
