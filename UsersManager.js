class UsersManager {
    constructor() {
        this._users = []; // variable privada para almacenar los usuarios
        this._userIdCounter = 1; // contador para el ID de usuarios
    }

    create(userData) {
        const newUser = {
            id: this._userIdCounter++,
            ...userData
        };

        this._users.push(newUser);
    }

    read() {
        return this._users;
    }
}

module.exports = UsersManager;