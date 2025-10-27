let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i am the danger");
  }, 5000);
  reject("i am in danger");
});
myPromise.then((value) => {
  console.log(value``);
});
