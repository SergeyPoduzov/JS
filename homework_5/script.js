// 1. Написать функцию сравнения двух массивов. Функция принимает на вход два массива, 
// сравнивает их и возвращает true, если массивы равны и false, если не равны.
let arrA = [5, 12, 46],
    arrB = [8, 10, 32],
    arrC = [8, 10, 32];

function comparison(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
console.log(comparison(arrA, arrB));
console.log(comparison(arrB, arrC));

// 2. Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона, 
// третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива.
// Функция возвращает массив, который содержит все числа из него, включая начальное и конечное. 
// Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].
function range(begin, end, step = 1) {
  let arr2 = [];
  for (begin; begin <= end; begin += step) {
    arr2.push(begin);
  }
  return arr2;
}
console.log(range(1, 10, 2));
console.log(range(0, 20));

// 3. Построить объект студент со свойствами:
// Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// Написать отдельную функцию, которой передается объект студент, 
// а она выводит его содержимое.
let student = {
    firstName: "Yana",
    lastName: "Naya",
    age: 20,
    interests: ["JS", "HTML", "CSS"],
    study: "ITMO",
};
ObjectStudent(student);  
function ObjectStudent(obj) {
    for (let prop in obj) {
      console.log(`${prop}: ${obj[prop]}`);
    }
}


// 4* Написать генератор случайных “русских слов”. Сформировать слово используя правила:
// - определить длину слова случайно, но в диапазоне от 3 до 5 букв;
// - начинать слово с гласной или согласной (определить случайно);
// - чередовать гласные и согласные буквы в слове;
// - буквы выбираются случайно.

let gl = "аеиоуыэюя",
    sogl = "бвгдзклмнпрстфхцчшщ";
//длина
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let lengthS = getRandomIntInclusive(3, 5);
if (Math.random() <= 0.5) {
    [sogl, gl] = [gl, sogl];
}

let res = "";
for (let i = 0; i < lengthS; i++) {
    if ((i % 2) === 0){
        res += gl[getRandomIntInclusive(0, gl.length - 1)];
    } else {
        res += sogl[getRandomIntInclusive(0, sogl.length - 1)];
    }
}
console.log(res);

