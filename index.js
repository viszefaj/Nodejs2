const dt=require('./app/Async');
const data=require('./app/Sync');
const p1=require('./app/Promise1');
const p2=require('./app/Promise2');



console.log('Hello, there are 2 texts in sync and async');
//console.log(dt)
setTimeout(function(){
    console.log(data)},300)

console.log(p1);
console.log(p2);
