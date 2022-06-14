const dt=require('./app/Async');
const data=require('./app/Sync');



console.log('Hello, there are 2 texts in sync and async');
//console.log(dt)
setTimeout(function(){
    console.log(data)},300)
