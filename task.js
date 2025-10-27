/*
1.Use a for loop to print only even numbers between 1 and 20.

2.Sum of First 10 Natural Numbers (1 to 10)

3.Print the multiplication table of 5 (like 1 x 5 = 5, 2 x 5 = 10 ).

4.Display all keys and values of an object, using for in loop

    let student = { name: "Ravi", age: 20, grade: "A" };

5.Print each name in the array, using for of loop

  let names = ["Arun", "Meena", "Sita", "Raj"];

6.Find the largest number in the array, using for loop + if condition
   let arr = [10, 25, 3, 99, 56];
   output= 99

7.Given an array of numbers, count how many are positive and negative.using for loop + if condition
   let numbers = [10, -5, 3, -2, 7, -9];
   output : positive=3, negative= 3

8.Iterate the nested array :  using nested for loop
      let matrix = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                   ]; 

9.Print Triangle Pattern using nested for loop
   *
   **
   ***
   ****
   *****

10.Given an array, print the first negative number and stop the loop. using for loop or for of loop and break statement
   let nums = [10, 20, -5, 30, -2];
   Output:  First negative: -5

11.Skip Negative Numbers , Print only positive numbers from an array.  using for loop or for of loop and continue statement
   let arr = [5, -2, 8, -9, 12];
   output: 5 8 12
*/

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
{
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(sum);
}
{
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} X 5 = ${i * 5}`);
  }
}
{
  let student = { name: "Ravi", age: 20, grade: "A" };
  for (key in student) {
    console.log(key, student[key]);
  }
}
{
  let arr = [10, 25, 3, 99, 56];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}
{
  let names = ["Arun", "Meena", "Sita", "Raj"];
  for (name of names) {
    console.log(name);
  }
}
{
  let numbers = [10, -5, 3, -2, 7, -9];
  let countPos = 0;
  let countNeg = 0;
  for (number of numbers) {
    if (number > 0) {
      countPos++;
    } else {
      countNeg++;
    }
  }
  console.log(countPos, countNeg);
}
{
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      console.log(matrix[i][j]);
    }
  }
}
{
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
      console.log("*");
    }
    console.log("\n");
  }
}
{
  let nums = [10, 20, -5, 30, -2];
  for (num of nums) {
    if (num < 0) {
      console.log(num);
      break;
    }
  }
}
{
  let arr = [5, -2, 8, -9, 12];
  for (element of arr) {
    if (element < 0) {
      continue;
    }
    console.log(element);
  }
}
