function add(n) {
  if (n == 1) {
    return 1;
  }

  return n + add(n - 1);
}
console.log(add(5));
/*
5+ add(5-1)
4+add(4-1)
3+add(3-1)
2+add(1) =2+1 --->3
3+add(2) =3+3 --->6
4+add(3) =4+6  --->10
5+add(4) =5+10 --->15



*/
// let arr = [1, 3, 5, 7, 9];
// let obj = { name: "guhan", age: 23 };
// for (key in obj) {
//   console.log(key);
// }
// for(let i of arr)
// {
//   console.log(i);

// }

function greet(name, getMsg) {
  return "Hello" + name + getMsg();
}

function printMsg() {
  return "Have a Great Day";
}
console.log(greet("guhan", printMsg));
