const lee = {name: 'Lee'};
const park = {name: 'Park'};

const map = new Map([[lee, 'developer'], [park, 'programmer']]);

map.forEach((v, k, map) => console.log(v, k, map));