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


const circle3 = Circle(15);
console.log(circle3);
console.log(radius);