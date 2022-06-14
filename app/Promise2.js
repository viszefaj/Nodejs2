const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(2);
    }, 2000);
});

try {
    let result = Promise.all([p2]);
    result.then((data) => console.log(data));
  } catch (error) {
    console.log(error);
  }



module.exports=p2;