let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 2000);
});
console.log(myPromise.catch());
