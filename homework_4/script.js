//1. Дана строка, изображающая целое число. Вывести сумму цифр этого числа.
let str = "123";
let num = 0;
for (let i = 0; i < str.length; i++) {
  num += parseInt(str[i]);
}
console.log(num);

//2. Дана строка и символ. Удвоить каждое вхождение заданного символа в строку.
let str2 = "Мама мыла раму.";
let lstr2 = str2.toLowerCase();
let target ="м";
let str22 ="";

for (let i = 0; i < lstr2.length; i++) {
  str22 += lstr2[i];
  if (lstr2[i] === target) {
    str22 += target;
  }
}
console.log(str22);


// 3. Проверить что введенный пароль удовлетворяет 
// следующим условиям сложности:
// - длинна от 9 символов;
// - содержит обязательно английские буквы верхнего и нижнего регистра;
// - содержит более двух цифр;
// - содержит обязательно один из неалфавитных символов (например, !, $, #, %).

let str3 = prompt("Введите пароль:","");

let long = false;
    up = false,
    down = false,
    num = false,
    sym = false;

if (/.{9,}/.test(str3))
    long = true;
if (/(\d\D*){3,}/.test(str3))
    num = true;
if (/[A-Z]/.test(str3))
    up = true;
if (/[a-z]/.test(str3))
    down = true;
if (/\W/.test(str3))
    sym = true;

let res = `Длина > 9 символов: ${long}\nЕсть 3 цифры: ${num}\nЕсть заглавные буквы лат. алфавита: ${up}\nЕсть строчные буквы лат. алфавита: ${down}\nЕсть спецсимволы: ${sym}`;
alert(res);


// 4** Нечёткий поиск:
// Дана строка-словарь, например: "Понедельник Вторник Среда Четверг Пятница 
// Суббота Воскресенье". Пользователь вводит слово из словаря с одной 
// перепутанной буквой, например: "Срида". Написать программу, которая 
// позволяет с использованием регулярного выражения найти в строке-словаре 
// введённое пользователем слово (не смотря на одну ошибку в слове) и 
// вывести исправленное слово пользователю, например: "Среда".

let day = prompt("Введите день недели:","");
    if (/[а-я]+н[а-я]*д[а-я]+к/i.test(day))
        alert("Понедельник");
    if (/в[а-я]*р[а-я]*к/i.test(day))
        alert("Вторник");
    if (/с[а-я]*д[а-я]*/i.test(day))
        alert("Среда");
    if (/ч[а-я]*г/i.test(day))
        alert("Четверг");
    if (/[а-я]?я[а-я]*ц[а-я]?/i.test(day))
        alert("Пятница");
    if (/[а-я]*[уб][а-я]*/i.test(day))
        alert("Суббота");
    if (/в[а-я]*к[а-я]*[се][а-я]*/i.test(day))
        alert("Воскресенье");