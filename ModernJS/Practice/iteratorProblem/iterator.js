const iterable = {
    [Symbol.iterator]() {
        let i = 3;

        return {
            next() {
                return i == 0 ? {done: true} : {value: i--, done: false};
            },
        };
    },
};

for (const item of iterable) {
    console.log(item);
}