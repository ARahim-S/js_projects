// const newArr = ["ahmet", "mehmet", "hasan"];

// const getName = (a, b, c) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };

// getName(...newArr);
// console.log(...newArr);

// function stringFormat(str) {
//   {
//     let part1 = str.slice(0, 3);
//     let part2 = str.slice(3);
//     str = part1.toUpperCase() + part2;
//   }
//   //part1 ve part2 kullanılamaz.
//   //bir kosula baglı return edelim. basit olması acısından sadece true yazdım.
//   if (true) {
//     return str;
//   }
//   return str.slice(4);
// }
// console.log(stringFormat("aliosman"));

// let count = 0;
// let increaseDOM = document.getElementById("increase");
// let decreaseDOM = document.getElementById("decrease");
// let counterDOM = document.querySelector(".counter");

// increaseDOM.addEventListener("click", handleEvent);
// decreaseDOM.addEventListener("click", handleEvent);

//first way
// function handleEvent(e) {
//   if (e.target.id === "increase") {
//     count += 1;
//     counterDOM.innerHTML = count;
//   } else {
//     if (count > 0) {
//       count -= 1;
//       counterDOM.innerHTML = count;
//     }
//   }
// }

//second way

// function handleEvent() {
//   this.id === "increase" ? (count += 1) : count > 0 ? (count -= 1) : null;
//   counterDOM.innerHTML = count;
// }

// counterDOM.innerHTML = count;

// function vowelsAndConsonants(s) {
//   //javascriptloops
//   let vowelArr = [];
//   let notVowelArr = [];
//   for (let i = 0; i < s.length; i++) {
//     if (
//       s[i] == "a" ||
//       s[i] == "e" ||
//       s[i] == "i" ||
//       s[i] == "o" ||
//       s[i] == "u"
//     ) {
//       vowelArr.push(s[i]);
//     } else {
//       notVowelArr.push(s[i]);
//     }
//   }
//   let lastArr = vowelArr.concat(notVowelArr);
//   for (let i = 0; i < lastArr.length; i++) {
//     console.log(lastArr[i]);
//   }
// }

// vowelsAndConsonants("javascriptloops");

//forEach()
// const animals = ["cat", "dog", "bird", "horse"];

// animals.forEach((value, index, array) => {
//   console.log("value: ", value);
//   console.log("value parametresinin aldığı index :", index);
//   console.log("array:", array);
// });

//filter()
// const person = [
//   {
//     name: "Adem",
//     age: 25,
//     languages: ["JavaScript", "CSS"],
//   },
//   {
//     name: "Oğuz",
//     age: 33,
//     languages: ["Java", "HTML"],
//   },
// ];

// const isAgeUpper30 = person.filter((item) => item.age > 30);
// const isKnownJS = person.filter((item) =>
//   item.languages.includes("CSS") ? item : null
// );

// console.log(isAgeUpper30[0].name);
// console.log(isKnownJS[0].name);
