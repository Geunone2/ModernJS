const todos = [
    {id: 1, content: 'HTML5', completed:false},
    {id: 2, content: 'CSS', completed:true},
    {id: 3, content: 'JavaScript', completed:true},
]

const json = JSON.stringify(todos);

const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);