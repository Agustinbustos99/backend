class UsersManager {
    static #users = [];

    static create(data) {
        const newUser = {
            id: UsersManager.#users.length + 1,
            ...data
        };
        UsersManager.#users.push(newUser);
        return newUser;
    }

    static read() {
        return UsersManager.#users;
    }

    static readOne(id) {
        return UsersManager.#users.find(user => user.id === id);
    }

    static destroy(id) {
        const index = UsersManager.#users.findIndex(user => user.id === id);
        if (index !== -1) {
            UsersManager.#users.splice(index, 1);
            return true;
        }
        return false;
    }
}


UsersManager.create({
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    password: 'password1',
    role: 'user'
});
UsersManager.create({
    name: 'María Rodríguez',
    email: 'maria.rodriguez@example.com',
    password: 'password2',
    role: 'user'
});
UsersManager.create({
    name: 'Luis García',
    email: 'luis.garcia@example.com',
    password: 'password3',
    role: 'user'
});
UsersManager.create({
    name: 'Ana Martínez',
    email: 'ana.martinez@example.com',
    password: 'password4',
    role: 'user'
});

module.exports = UsersManager;
