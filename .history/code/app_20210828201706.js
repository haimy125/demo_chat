function sayHello() {
    console.log("hello node.js!!");
}
sayHello();
//first-last function
function logSaying(fn) {
    fn();
}
logSaying(sayHello);
//function expression
var sayGoodBye = function() {
    console.log("good bye");
}