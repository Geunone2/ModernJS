var x  = 1;
function foo(){
    var x = 10;
    bar(); // 3
}

function bar(){
    console.log(x);
}

foo();  // 1
bar();  // 2