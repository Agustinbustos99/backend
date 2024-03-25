// UsersManager.js

class UsersManager {
    // Variable privada estática para almacenar usuarios
    static #users = [];

    // Método estático para crear un usuario
    static createUser(userData) {
        // Validación de campos requeridos
        if (!userData.name || !userData.email || !userData.password || !userData.role) {
            throw new Error('Todos los campos son requeridos para crear un usuario.');
        }

        const newUser = {
            id: UsersManager.#users.length + 1,
            ...userData
        };

        UsersManager.#users.push(newUser);
    }

    // Método estático para leer todos los usuarios
    static readUsers() {
        return UsersManager.#users;
    }
}

module.exports = UsersManager;
