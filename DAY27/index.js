
// JavaScript is Synchronous 
// There can be async behaviours
      // - with Browser APIs/Web APIs - setTimeout, setInterval
      // - With Promises
      // - With Event Handlers


// Event Loop
      // - Call Stack
      // - Web APIs
      // - Callback Queue
      // - MicroTask Queue/ Job Queue:
      // - Event Loop:


function f1() {
      console.log('f1');
}

function f2() {
      console.log('f2')
}

function main(){
      console.log('main');

      setTimeout(f1,0);

      f2();
}

main();

console.log('hello world');


// using Promises

function f1() {
      console.log('f1');
}

function f2( ) {
      console.log("f2");
}

function main() {
      console.log("main");
      setTimeout(f1 ,0);

      new Promise((resolve, reject) => {
            resolve('I am a Promise!');
      }).then((resolve)=>console.log(resolve));

      f2();
}


//Quize 

function f1() {
      console.log('f1');
}

function f2() {
      console.log('f2');
}

function f3() {
      console.log('f3');
}

function f4() {
      console.log('f4');
}

console.log("Lets do it!");

setTimeout(function()  {f1();
      
}, 0);

f4();

setTimeout(function() {f2()
      
}, 5000);

setTimeout(function() {
      f3()
},3000);

//correct answer
// - lets do it!,f4,f1,f3,f2

// - lets do it! is executed by Exevution Stack
// -f1() calls browser API, so gets added to callback Queue
// - f4() gets added to Execution stack and is executed
// - Event loop find a callback function f1() in callback queue and executes it 
// - f2() calls browser API and gets added to callback queue, similarly f3() is added to callback queue
// - Now there is nothing in Execution stack , so event loop checks and finds f2() and f3() callback functions in callback queue
// - f3() goes int the stack after timeout and gets executed
// - f2() too goes back into the stack after timeout,and gets executed