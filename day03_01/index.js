const newArr = ["ahmet", "mehmet", "hasan"];

const getName = (a, b, c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};

getName(...newArr);
console.log(...newArr);
