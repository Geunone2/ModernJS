[1, 2, 3].map((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
    return item;
});

class Prefixer1 {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        return arr.map(function (item) {
            return this.prefix + item;
        }, this);
    }
}


const prefixer1 = new Prefixer1('-webkit-');
console.log(prefixer1.add(['transition', 'user-select']));

class Prefixer2 {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        return arr.map(item => this.prefix + item);
    }
}

const prefixer2 = new Prefixer2('-webkit-');
console.log(prefixer2.add(['transition', 'user-select']));
