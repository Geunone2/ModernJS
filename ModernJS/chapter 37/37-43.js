const lee = {name: 'Lee'};
const park = {name: 'Park'};

const map = new Map([[lee, 'developer'], [park, 'programmer']]);

console.log(Symbol.iterator in map);

for (const entry of map) {
    console.log(entry);
}

console.log([...map]);

const [a, b] = map;
console.log(a, b);