[1, 2, 3].filter((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
    return item % 2;
});

class Users {
    constructor() {
        this.users = [
            {id: 1, name: 'park'},
            {id: 2, name: 'kim'},
        ];
    }

    findById(id) {
        return this.users.filter(user => user.id === id);
    }

    remove(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
}

const users = new Users();

let user = users.findById(1);
console.log(user);

users.remove(1);

user = users.findById(1);
console.log(user);