// задачи с сайта old.code.mu
// lesson 2
/*let num = 3;
alert(num);
let a = 10;
let b = 2;
document.write(a + b);
document.write("<br />");
document.write(a - b);
document.write("<br />");
document.write(a * b);
document.write("<br />");
document.write(a / b);
let c = 15;
let d = 2;
let result = c + d;
document.write("<br />");
document.write(result);

let str = "hello, world!";
document.write("<br />");
document.write(str);
let str1 = "hello,";
let str2 = "world!";
document.write("<br />");
document.write(str1 + " " + str2);
let name = "boris";
document.write("<br />");
document.write("hello " + name);

let name = prompt("vvedite vashe name", "");
alert("you name is " + name);
let chislo = prompt("vedite chislo", "");
alert("kvadrat vashego chisla " + chislo * chislo);

let str = "abcde";
document.write("<br />");
document.write(str[0] + str[2] + str[4]);
let num = 12345;
let num2 = String(num);
console.log(num2);
document.write("<br />");
let result1 = 1;
for (let i = 0; i < num2.length; i += 1) {
  result1 = result1 * Number(num2[i]);
  console.log(result1);
}
document.write(result1);
let chas = 13;
let minuta = 34;
let secunda = 40;
alert(chas + ":" + minuta + ":" + secunda);
*/
// lesson 3
/*
let arr = {
  a: "a",
  b: "b",
  c: "c",
  d: "d"
};
document.write(arr.a + "+" + arr.b + ", " + arr.c + "+ " + arr.d);
let arr2 = {
  a: 2,
  b: 5,
  c: 3,
  d: 9
};
let result = arr2.a * arr2.b + arr2.c * arr2.d;
document.write("<br />");
document.write(result);
let obj1 = { a: 1, b: 2, c: 333 };
document.write("<br />");
document.write(obj1.c);
document.write("<br />");
document.write(obj1["c"]);
let obj = { Коля: "1000", Вася: "500", Петя: "200" };
document.write("<br />");
document.write("зарлпата Пети " + obj["Петя"]);
document.write("<br />");
document.write("зарлпата Коли " + obj["Коля"]);
let week = {
  1: "monday",
  2: "thuesday",
  3: "wednesday",
  4: "thusday",
  5: "friday",
  6: "saturday",
  7: "sunday"
};
document.write("<br />");
document.write(week["7"]);
let day = 3;
document.write("<br />");
document.write(week[day]);
let mass = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
document.write("<br />");
document.write(mass[1][0]);
let mass2 = { js: ["jQuery", "Angular"], php: "hello", css: "world" };
document.write("<br />");
document.write(mass2["js"][0]);
let mass3 = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
  ],
  en: [
    "Monday",
    "Thuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday",
    "Sunday"
  ]
};
document.write("<br />");
document.write(mass3["ru"][0] + " " + mass3["en"][2]);
let lang = "ru";
document.write("<br />");
document.write(mass3[lang][day]);
*/
// урок 4
/*let a = prompt("vvedite chislo", "");
if (a === "1") {
  document.write("vverno");
} else {
  document.write("neverno");
}

let test;
if (!test) {
  document.write("vverno");
} else {
  document.write("neverno");
}

let a = prompt("vvedite chislo", "");
let b = Number(a);
if (b === 0 || b === 2) {
  b += 2;
} else {
  b = b / 10;
}
document.write(b);

let a = prompt("vvedite chislo", "");
let b = prompt("vvedite chislo", "");
if (+a <= 1 && +b >= 3) {
  document.write(+a + +b);
} else {
  document.write(+a - +b);
}

let a = prompt("vvedite chislo", "");
let b = prompt("vvedite chislo", "");
if ((+a > 2 && +a < 11) || (b >= 6 && b < 14)) {
  document.write("vverno");
} else {
  document.write("neverno");
}
*/
/*
let num = prompt("vvedite chislo", "");
switch (+num) {
  case 1:
    document.write("winter");
    break;
  case 2:
    document.write("spring \n ");
    break;
  case 3:
    document.write("summer \n");
    break;
  case 4:
    document.write("autumn \n");
    break;
  default:
    document.write("what");
    break;
}
document.write("hello world!");
*/
/*
let day = +prompt("vvedite chislo", "");
if (day > 0 && day <= 10) {
  document.write("day in first decad");
} else if (day > 10 && day <= 20) {
  document.write("day in second decade");
} else if (day > 20 && day <= 31) {
  document.write("day in third decade");
} else {
  document.write("you ebobo");
}
document.write("</br>");
let str = prompt("vvedite stroku", "");
if (str[0] === "a") {
  document.write("da");
} else {
  document.write("no");
}
*/
/*
let str = prompt("vvedite chislo", "");
let result = null;
for (let i = 0; i < str.length; i += 1) {
  result += +str[i];
}
alert("summa vashego chisla " + result);
*/
// урок 5 циклы
/*
for (let i = 0; i <= 100; i += 1) {
  if (i % 2 === 0) {
    document.write(i + "<br/ >");
  }
}
let result = null;
for (let i = 0; i <= 100; i += 1) {
  result += i;
}
alert(result);
*/
/*
let arr = [1, 2, 3, 4, 5];
let result = null;
for (let i = 0; i < arr.length; i += 1) {
  document.write(arr[i] + " ");
  result += +arr[i];
}
alert(result);
*/
/*
let obj = { green: "зеленый", red: "красный", blue: "голубой" };
for (key in obj) {
  document.write(key + " ");
  document.write(obj[key] + " ");
  document.write("<br/>");
}
let obj2 = { Коля: "200", Вася: "300", Петя: "400" };
for (key in obj2) {
  document.write(key + " - зарплата " + obj2[key] + " долларов.");
  document.write("<br/>");
}
let obj3 = [2, 5, 9, 15, 0, 4];
for (key in obj3) {
  if (obj3[key] > 3 && obj3[key] < 10) {
    document.write(obj3[key] + "<br/>");
  }
}
*/
/*let arr = [1, 2, 5, 4, 9, 13, 10, 4];
for (key in arr) {
  if (arr[key] === 4) {
    alert("est");
    break;
  }
}
let arr2 = [10, 20, 30, 50, 235, 3000];
for (key in arr2) {
  let str = String(arr2[key]);
  if (str[0] === "1" || str[0] === "2" || str[0] === "5") {
    document.write(arr2[key] + " ");
  }
}
*/
/*
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (key in arr3) {
  document.write("-" + arr3[key]);
}
document.write("-");
*/
/*
let arr4 = [
  "monday",
  "thuesday",
  " wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
];
for (key in arr4) {
  if (key < 5) {
    document.write(arr4[key] + "<br />");
  } else {
    document.write("<b>" + arr4[key] + "<br/>" + " </b>");
  }
}
*/
/*
let n = 1000;
let i = 1;
do {
  n /= 2;
  i += 1;
  console.log(n);
} while (n > 50);
document.write(`chislo -${n} kol iter - ${i}`);
*/
// lesson 6
/*
let a = +prompt("vvedite chislitel", "");
let b = +prompt(" vvedite znamenatel", "");
if (a % b === 0) {
  document.write(`delitsa bez ostatka ${a / b}`);
} else {
  document.write(`delitsa s ostatkom ${a % b}`);
}
let st = 245 ** (1 / 2);
alert(st);
*/
/*let arr = [4, 2, 5, 19, 13, 0, 10];
let result = null;
for (key in arr) {
  result += arr[key] ** 3;
}
result = result ** (1 / 2);
alert(result);
*/
/*let num = 379;
num = num ** (1 / 2);
alert(num.toFixed(0));
alert(num.toFixed(1));
alert(num.toFixed(2));
*/
/*let arr = [4, -2, 5, 19, -130, 0, 10];
function getMaxOfArray(arr) {
  return Math.max.apply(null, arr);
}
function getMinOfArray(arr) {
  return Math.min.apply(null, arr);
}
alert(getMaxOfArray(arr));
alert(getMinOfArray(arr));
*/
/*
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
alert(getRandom(1, 100));
let arr = [];
for (let i = 0; i < 10; i += 1) {
  arr.push(getRandom(0, 100));
}
document.write(arr);
*/
/*
let num1 = +prompt("vvedite chislo 1", "");
let num2 = +prompt("vvedite chislo 2", "");
alert("modul raznici " + Math.abs(num1 - num2));
let arr = [12, 15, 20, 25, 59, 79];
let sum = null;
for (let i = 0; i < arr.length; i += 1) {
  sum += arr[i];
}
document.write(" sreednee massiva = " + sum / arr.length);

function factorial(n) {
  let result = null;
  if (n === 1) {
    result = 1;
  } else {
    result = n * factorial(n - 1);
  }
  return result;
}
alert(factorial(10));
*/
