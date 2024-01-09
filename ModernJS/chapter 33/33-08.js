const s1 = Symbol.for('mySymbol');

Symbol.keyFor(s1);

const s2 = Symbol('foo');

Symbol.keyFor(s2);