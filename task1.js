function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "A" ||
      str[i] === "E" ||
      str[i] === "I" ||
      str[i] === "O" ||
      str[i] === "U"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Elephant"));

// str1 = "hello";
// console.log(str1[0]);
function reverseString(str) {
  let rev = "";
  let len = str.length;
  for (let i = len - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  return rev;
}
console.log(reverseString("JavaScript"));

function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([4, 1, 9, 3, 7]));

function removeDuplicates(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    // if (!res.includes(arr[i])) {
    //   res.push(arr[i]);
    // }

    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 4]));

function isPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count > 2 || num == 1) {
    return false;
  } else {
    return true;
  }
}
console.log(isPrime(4));

function factorial(num) {
  let fact = 1;
  if (num == 0) {
    return 1;
  }
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(3));

function findOddEven(arr) {
  let oddArr = [];
  let evenArr = [];
  for (let i of arr) {
    if (i % 2 == 0) {
      evenArr.push(i);
    } else {
      oddArr.push(i);
    }
  }
  console.log(oddArr);
  console.log(evenArr);
}
findOddEven([1, 2, 3, 4, 5, 6]);

const removedDuplicatesArray = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
    return result;
  }
};
console.log(removeDuplicates([1, 8, 5, 1, 2, 8]).sort());

