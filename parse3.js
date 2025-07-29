function performAction(a, b, callback) {
    let result = a + b;
    callback(result);
}
performAction(3, 4, function(res) {
    console.log("Result is " + res);
});

var globalVar = "I'm global";
function checkVarScope() {
    var blockVar = "Block var";
    let blockLet = "Block let";
    const blockConst = "Block const";
    console.log(globalVar);
    console.log(blockVar);
    console.log(blockLet);
    console.log(blockConst);
}
checkVarScope();

function outerFunction() {
    let outerVar = "outside";
    function innerFunction() {
        console.log(outerVar);
    }
    innerFunction();
}
outerFunction();