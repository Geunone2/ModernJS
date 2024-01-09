const lee = {name: 'Lee'};
const park = {name: 'Park'};

const map = new Map([[lee, 'developer'], [park, 'programmer']]);

console.log(map.has(lee));
console.log(map.has('key'));