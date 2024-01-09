const lee = {name: 'Lee'};
const park = {name: 'Park'};

const map = new Map([[lee, 'developer'], [park, 'programmer']]);

map.delete(lee).delete(park);