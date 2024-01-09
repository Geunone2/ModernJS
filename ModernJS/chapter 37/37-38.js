const lee = {name: 'Lee'};
const park = {name: 'Park'};

const map = new Map([[lee, 'developer'], [park, 'programmer']]);

map.delete(park);
console.log(map);