// задачи с сайта learn.javascript.ru
/*let n = prompt("", "");
let prostoeChislo = n => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    } else {
      return true;
    }
  }
};

for (let i = 2; i < n; i += 1) {
  if (prostoeChislo(i) === true) {
    document.write(`${i}  `);
  }
}

let pow = (x, n) => {
  result = 1;
  for (let i = 1; i <= n; i += 1) {
    result *= x;
  }
  return result;
};
let xx = prompt("", "");
let nn = prompt("", "");
 document.write(
  pow(Number(xx), Number(nn))
);
// объекты
let user = {};
user.name = "Jhon";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
// проверка объекта на пустоту
let objectEmpty = object1 => {
  for (let key in object1) {
    return false;
  }
  return true;
};
// сумма всех зарплат из объекта
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);
// умножение свойств обхекта на 2 если они число
let multiplyNumeric = obj => {
  for (let key in obj) {
    if (typeof obj[key] === Number) {
      obj[key] *= 2;
    }
  }
};
*/
// калькулятор
/*
let calculator = {
  read() {
    this.num1 = prompt("vvedite chislo 1", 0);
    this.num2 = prompt("vvedite chislo 2", 0);
  },
  sum() {
    return +this.num1 + +this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
*/
/*let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    ladder.step--;
    return this;
  },
  showStep() {
    // показывает текущую ступеньку
    alert(ladder.step);
    return this;
  }
};
ladder
  .up()
  .up()
  .down()
  .showStep(); // 1
*/
/*
function Accumulator(startValue) {
  this.value = +startValue;
  this.read = function() {
    let num = +prompt("chislo", "");

    this.value += num;
  };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
*/
/*
let readNumber = num => {
  num = prompt("vvedite chislo", "");
  let num2 = +num;
  if (num2 === null || num2 === 0) {
    alert("pusto");
    return null;
  }
  if (isNaN(num)) {
    alert("eto ne chislo");
    readNumber();
  } else {
    return num2;
  }
};
readNumber();
*/
/*
let random = (min, max) => {
  return Math.random() * (max - min) + min;
};
let ucFirst = str => {
  let str2 = str[0].toUpperCase();
  return str2 + str.slice(1);
};
let checkSpam = str => {
  let lowerStr = str.toLowerCase();
  if (lowerStr.includes("viagra") || lowerStr.includes("xxx")) {
    return true;
  } else {
    return false;
  }
};
let truncate = (str, maxlength) => {
  if (str.length < maxlength) {
    return str;
  } else {
    return str.slice(0, maxlength - 1) + "...";
  }
};
*/
/*
let extractCurrencyValue = str => {
  let str2 = "";
  let str3 = "";
  let i = str.length - 1;
  for (i; i >= 0; i -= 1) {
    str2 += `${str[i]}`;
    console.log(str2);
  }
  str2 = String(parseInt(str2));
  console.log(str2);
  for (let j = str2.length - 1; j >= 0; j -= 1) {
    str3 += str2[j];
  }
  return +str3;
};
alert(extractCurrencyValue("$125"));
*/
/*
let styles = ["Джаз", "Блюз"];
styles.push("rock & roll");
styles[1] = "Classic";
alert(styles.shift());
styles.unshift("Rep", "Reggi");
document.write(styles);
*/
/*
function sumInput() {
  let arr = [];
  let result = null;
  while (true) {
    let num = prompt("vvedite chislo", "");
    if (!isFinite(num) || num === "null" || num === "") break;
    arr.push(+num);
    result += +num;
  }
  document.write(result);
  return result;
}
sumInput();
*/
/*
function getMaxSubSum(arr) {
  let result = [0];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] + result > 0) {
      result.push(arr[i]);
    } else {
      result = 0;
    }
  }
  alert(result);
}
*/
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    document.write(maxSum + " ");
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}
