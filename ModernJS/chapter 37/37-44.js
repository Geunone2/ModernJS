    const lee = {name: 'Lee'};
    const park = {name: 'Park'};

    const map = new Map([[lee, 'developer'], [park, 'programmer']]);

    for (const key of map.keys()) {
        console.log(key);
    }

    for (const value of map.values()) {
        console.log(value);
    }

    for (const entry of map.entries()) {
        console.log(entry);
    }