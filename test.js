
// Строки

let test = 'Мы - компания \"Google\"';
console.log(test);

// Найти номер, когда начинается

let position = test.indexOf('Google');
console.log(position);

// Если вытащить

let sliced = test.slice(position, -1);
console.log(sliced);

// Если нужно заменить
let apple = test.replace("Google", "Apple");
console.log(apple);

// Изначальная строка не меняется, записываем в переменную  и ее меняем, часто используется при приветствии юзера

let message = "Привет, username!";
let name = "Юля";
let result = message.replace("username", name);
console.log(result);

// замена происходит с учетом регистра. Можно использовать флаг i, который может искать с любым регистром

// Преобразование верхнего и нижнего регистра

let big = name.toUpperCase();
console.log(big);
let small = name.toLowerCase();
console.log(small);
// Исп, когда нужно сравнить две строки без учета регистра
let username = "юля";
if (name.toUpperCase() == username.toUpperCase()) {
    console.log(true);
}

let txt = "Москва, Томск, Калининград";
let citys = txt.split(",");
console.log(citys);
// разделение по пробелам на массив

// склеить 

console.log(citys.join(";"));

// очищение пробелов , так же используется при сравнении

let str = "        Калик";
let clean = str.trim(str);
console.log(clean);

// Даты
// пишется только с  new

let now = new Date();
console.log(now);

// милисекунды с 1970 г

let timestamp = new Date(24 * 3600 * 1000);
console.log(timestamp)

// дата через строку (пишется с года)

let date = new Date("2021-08-09");
console.log(date);

// еще гибкий способ задавать даты , месяц начинается с 0

let num = new Date(2021, 07, 09);
console.log(num);
// можно выводить отдельно

console.log(num.getDate());
console.log(num.getHours());
console.log(num.getMonth() +1);
console.log(num.getFullYear());


console.log(`${num.getDate()}.${num.getMonth() + 1}.${num.getFullYear()}`);

// можнопереписывать значения при помощи set, меняется и сама переменная, в отличие от строк

num.setFullYear(2022);
console.log(num);

// милисекунды подсчет

let diff = Date.now() - date;
console.log(diff / 1000 / 3600);
// получилось кол-во часов, которое прошло

function first(string) {
    return string[0].toUpperCase() + string.slice(1);
}
alert(first("настя"));










