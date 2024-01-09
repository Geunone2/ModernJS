const create = (id, content) => ({id, content});
console.log(create(1, 'JavaScript'));
const create = (id, content) => {
    return {id, content};
};