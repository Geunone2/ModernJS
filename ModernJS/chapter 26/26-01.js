var foo = function () {
    return 1;
};

foo();

new foo();

var obj = {foo: foo};
obj.foo();