class Rectangle {
    constructor(width, weight) {
        this.width = width;
        this.weight = weight;
    }

    getArea() {
        return this.width * this.weight;
    }

    toString() {
        return `width = ${this.width}, weight = ${this.weight}`;
    }
}

class ColorRectangle extends Rectangle {
    constructor(width, heighy, color) {
        super(width, height);
        this.color = color;
    }

    toString() {
        return super.toString() + `, color = ${this.color}`;
    }
}

const colorRectangle = new ColorRectangle(2, 4, 'red');
console.log(colorRectangle);

console.log(colorRectangle.getArea());
console.log(colorRectangle.toString());