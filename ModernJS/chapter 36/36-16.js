const {firstName = 'Geunwon', lastName} = {lastName: 'Park'};
console.log(firstName, lastName);

const {firstName: fn = 'Geunwon', lastName: ln} = {lastName: 'Park'};
console.log(fn, ln);