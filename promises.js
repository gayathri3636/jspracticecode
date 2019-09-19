import { resolve } from "path";

//Asynchronous code--Even if the delay is zero the asynchronous is executes after synchronous
setTimeout(function() {
  console.log("I am asychronous message"), 5000
})
console.log("I am synchronous message");


//setInterval function--Even this is same except it runs forever if we dont clear the timer
let counter = 0;
let timer = setInterval(() => {
  console.log("i am asynchronous message");
  counter += 1;
  if(counter >= 5) {
    clearInterval(timer)
  }
},2000);
console.log("I am synchronous message");

//promises
var promisevariable = new promise((resolve, reject) => {
  setTimeout(function() {
    resolve("Hello world")
  }, 2000);
})
promise.then((data) => {
  console.log(data);
})
