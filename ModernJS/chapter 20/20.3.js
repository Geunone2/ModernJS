(function () {
    //non-strict mode
    var c = 10; // 에러 발생 x -> 근데 왜 변수를 let 쓴거지 ..?

    function foo() {
        'use strict';

       c  = 20; // SyntaxError : ~
    }
    foo();
}());