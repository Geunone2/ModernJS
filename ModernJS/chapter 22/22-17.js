function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// 반지름 5 Circle 객체 생성
const circle1 = new Circle(5);
// 반지름 10 Circle 객체 생성
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());