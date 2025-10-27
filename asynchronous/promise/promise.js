const isMajor = false;
let myPromise = new Promise((resolve, reject) => {
  if (isMajor) {
    resolve("can vote");
  } else {
    reject("cannot vote");
  }
});
myPromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
