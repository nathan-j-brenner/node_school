var a:number = 1, b: number = 2, c: number = 3;
(function firstFuction(){
    var b = 5, c = 6;
    (function secondFunction(){
        var b = 8;
        console.log(`a: ${a}, b: ${b}, c: ${c}`);
        (function thirdFunction(){
            var a = 7; c = 9;
            (function fourthFunction(){
                var a = 1, c = 8;
            })();
        })();
    })();
})();