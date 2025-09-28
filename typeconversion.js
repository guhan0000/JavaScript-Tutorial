let num = "130";
console.log(Number(num));
console.log(Number("hello")); // NaN Not a Number
console.log(typeof Number(num)); //number
console.log(Number(64.84)); //64.84
console.log(Number(false)); // 0
console.log(Number(true)); //1
console.log(Number(undefined)); // NaN
console.log(Number(null)); //0

// *******parseInt***********
let n = "23";
n = parseInt(n);
console.log(n);
let result;
console.log(n + " " + typeof n);
let data = "12dogs";
result = parseInt(data);
console.log(result); //12
console.log(parseInt("pssgfsd42242")); // Nan bcoz parseInt reads from left to right and looks for very first number here 'p' is present so it returns NaN
console.log(parseInt("12.34px")); //12
console.log(parseFloat("12.32-x"));
console.log(parseInt(false)); //Nan
console.log(parseInt(undefined)); // NaN
console.log(parseInt(null)); // NaN
// *****unary+ shorthand of Number*******
console.log(+"10"); // number 10
console.log(+"10px"); //NaN
console.log(+null); //0
console.log(NaN);

console.log(Boolean(false)); //false
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean(-3)); //true
console.log(Boolean(-0)); //false
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
console.log(Boolean("hello")); //true
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean([])); //true
console.log(Boolean({}));//true

