const person = {
    name: "Lee",
    getName(){
        // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩딤
        return this.name;
    }
};

console.log(person.getName());