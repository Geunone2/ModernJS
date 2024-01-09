const map = new Map();

const lee = {name: 'Lee'};
const park = {name: 'Park'};

map
    .set(lee, 'developer')
    .set(park, 'programmer');

console.log(map.get(lee));
console.log(map.get('key'));