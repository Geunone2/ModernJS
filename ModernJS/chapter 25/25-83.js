class MyArray extends Array {
    static get [Symbol.species]() {
        return Array;
    }

    uniq() {
        return this.filter((v, i, self) => self.indexOf(v) === i);
    }

    average() {
        return this.reduce((pre, cur) => pre + cur, 0) / this.length;
    }
}

const myArray = new MyArray(1, 1, 2, 3);

console.log(myArray.uniq() instanceof MyArray);
console.log(myArray.uniq() instanceof Array);

// 메서드 체이닝
// uniq 메서드는 Array 인스턴스를 반환하므로 average 메서드를 호출x
console.log(myArray.uniq().average);
// TypeError : myArray.uniq(...).average ~ 