const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(1);
    },1000);

});

try {
    let result = Promise.all([p1]);
    result.then((data) => console.log(data));
  } catch (error) {
    console.log(error);
  }


module.exports=p1;