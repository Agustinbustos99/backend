const fs = require('fs');

class UsersManager {
    static #filePath = 'users.json';

    static create(data) {
        const users = UsersManager.readFromFile();
        const newUser = {
            id: users.length + 1,
            ...data
        };
        users.push(newUser);
        UsersManager.saveToFile(users);
        return newUser;
    }

    static read() {
        return UsersManager.readFromFile();
    }

    static readOne(id) {
        const users = UsersManager.readFromFile();
        return users.find(user => user.id === id);
    }

    static destroy(id) {
        let users = UsersManager.readFromFile();
        users = users.filter(user => user.id !== id);
        UsersManager.saveToFile(users);
        return true;
    }

    static readFromFile() {
        try {
            const data = fs.readFileSync(UsersManager.#filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }

    static saveToFile(data) {
        try {
            fs.writeFileSync(UsersManager.#filePath, JSON.stringify(data, null, 2));
        } catch (error) {
            console.error('Error saving data to file:', error);
        }
    }
}

module.exports = UsersManager;
