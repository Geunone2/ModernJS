const users = [
    {id: 1, name: 'Lee'},
    {id: 2, name: 'Choi'},
    {id: 2, name: 'Kim'},
    {id: 3, name: 'Park'},
];

console.log(users.find(user => user.id === 2));