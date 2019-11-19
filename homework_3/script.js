// 1. Заданы два массива 
// A = [ 12, 4, 3, 10, 1, 20 ]  
// B = [-3, -7, -100, -33] 
// необходимо их объединить 
// в один массив C добавив 
// массив B в конец(в начало) A.

let arrA = [ 12, 4, 3, 10, 1, 20 ],
    arrB = [-3, -7, -100, -33];

let arrC = arrA.concat(arrB);
console.log(arrC);


// 2. Одномерным массивом задана доска 3 на 3 
// var area = [ null, null, null, null, null, null, null, null, null ]
// Необходимо сформировать и вывести (document.write) игровое поле состоящее из квадратов для крестиков-ноликов  в HTML. 
// При появлении в массиве 0-ля рисовать нолик , 1-цы крестик 
// Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.

let area=[1, null, 0, null, 1, null, null, null, null];
let cell = [];

for (let i=0; i<area.length; i++) {
    if (area[i]===0) {
        cell.push("0");
    } else if (area[i]===1) {
        cell.push("X");
    } else if (area[i]===null) {
        cell.push(" ");
    }
}

let matrix = "<table>";
for (let i = 0; i < cell.length; i = i + 3) {
    matrix += "<tr><td>"+cell[i]+"</td><td>"+cell[i+1]+"</td><td>"+cell[i+2]+"</td></tr>";
}

document.write(`${matrix}</table>`);


// 3. Задан массив  - [12,4,3,10,1,20]. 
// Удалить из него наименьшее и наибольшее значение.

let arr2 = [12,4,3,10,1,20];
let min = arr2[0], max = arr2[0];

for(let i = 1, len = arr2.length; i < len; i++){ 
    if(arr2[i] > max)
        max = arr2[i];
    if (arr2[i] < min)
        min = arr2[i];
}
console.log(min, max);
console.log(arr2);

for(i = 0; i < arr2.length-1; i++){ 
    //один проход
    for(let j = 0; j < arr2.length - 1 - i; j++){
        //одно папарное сравнение
        if(arr2[j] > arr2[j + 1]){
            let temp = arr2[j];
            arr2[j] = arr2[j+1];
            arr2[j+1] = temp;
        }
    }    
}

console.log(arr2);
arr2.shift();
arr2.pop();
console.log(arr2);


