function sayHello() {
    console.log("hello node.js!!");
}
sayHello();
//first-last function
function logSaying(fn) {
    fn();
}
logSaying(sayHello);