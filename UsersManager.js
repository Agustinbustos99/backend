class UsersManager {
    
    static #users = [];

   
    static createUser(userData) {
     
        if (!userData.name || !userData.email || !userData.password || !userData.role) {
            throw new Error('Todos los campos son requeridos para crear un usuario.');
        }

        const newUser = {
            id: UsersManager.#users.length + 1,
            ...userData
        };

        UsersManager.#users.push(newUser);
    }

   
    static readUsers() {
        return UsersManager.#users;
    }
}

module.exports = UsersManager;
