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


// 4*. В городе N проезд в трамвае осуществляется по бумажным отрывным билетам. 
// Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов 
// с номерами от 000001 до 999999. 
// «Счастливым» считается билетик у которого сумма первых трёх цифр номера равна 
// сумме последних трёх цифр, как, например, в билетах с номерами 003102 или 567576. 
// Трамвайное депо решило подарить сувенир обладателю каждого счастливого билета и 
// теперь раздумывает, как много сувениров потребуется. 
// С помощью программы подсчитайте сколько счастливых билетов в одном рулоне. 

let arr4 = [];
let st, lev, prav, suml, sump;
let lucky = 0;

for(let i=1; i < 1000000; i++) {
    if(i<10){
        arr4 = [0, 0, 0, 0, 0, i];
        st = arr4.join("");
        lev = st.substr(0, 3);
        suml = parseInt(lev[0]) + parseInt(lev[1])+ parseInt(lev[2]);
        prav = st.substr(3, 3);
        sump = parseInt(prav[0]) + parseInt(prav[1])+ parseInt(prav[2]);  
    } else if(i<100) {
        arr4 = [0, 0, 0, 0, i];
        st = arr4.join("");
        lev = st.substr(0, 3);
        suml = parseInt(lev[0]) + parseInt(lev[1])+ parseInt(lev[2]);
        prav = st.substr(3, 3);
        sump = parseInt(prav[0]) + parseInt(prav[1])+ parseInt(prav[2]);      
    } else if(i<1000){
        arr4 = [0, 0, 0, i];
        st = arr4.join("");
        lev = st.substr(0, 3);
        suml = parseInt(lev[0]) + parseInt(lev[1])+ parseInt(lev[2]);
        prav = st.substr(3, 3);
        sump = parseInt(prav[0]) + parseInt(prav[1])+ parseInt(prav[2]);      
    } else if(i<10000){
        arr4 = [0, 0, i];
        st = arr4.join("");
        lev = st.substr(0, 3);
        suml = parseInt(lev[0]) + parseInt(lev[1])+ parseInt(lev[2]);
        prav = st.substr(3, 3);
        sump = parseInt(prav[0]) + parseInt(prav[1])+ parseInt(prav[2]);       
    }else if(i<100000){
        arr4 = [0, i];
        st = arr4.join("");
        lev = st.substr(0, 3);
        suml = parseInt(lev[0]) + parseInt(lev[1])+ parseInt(lev[2]);
        prav = st.substr(3, 3);
        sump = parseInt(prav[0]) + parseInt(prav[1])+ parseInt(prav[2]);      
    }else {
        arr4 = [i];
        st = arr4.join("");
        lev = st.substr(0, 3);
        suml = parseInt(lev[0]) + parseInt(lev[1])+ parseInt(lev[2]);
        prav = st.substr(3, 3);
        sump = parseInt(prav[0]) + parseInt(prav[1])+ parseInt(prav[2]);       
    }
   
    if (suml == sump) {
        //console.log(st);
        lucky++;
    }
}

console.log('Всего счастливый билетов '+ lucky);


// 5*) Задача «Аннигилируй это».
// Вы устроились работать в лабораторию по изучению антиматерии, где проводят различные опыты.
//  Ваш отдел изучает процессы, которые происходят при объединении материи и антиматерии. 
//  Вам необходимо провести серию опытов над некоторым количеством молекул.
// Соседний отдел разработал аппарат, который превращает материю в антиматерию на небольшое время. 
// Он пригодится вам в проведении опытов, в которых используется следующий алгоритм:
// 1. Находим 2 самых тяжёлых молекулы.
// 2. Одну из них превращаем в антиматерию.
// 3. Объединяем их. При этом, если вес одинаковый, они аннигилируются. Если же вес различается, то мы получаем новую молекулу, 
// вес которой равен разнице весов предыдущих двух. Сама получившаяся молекула является материей.
// Если осталась одна молекула — нужно выяснить её вес. Если же молекул много — возвращаемся к пункту 1.
// Вам необходимо узнать, молекула какого веса останется в конце опыта, это знание нужно учёным другого отдела. 
// Вам необходимо разработать код, чтобы он работал за приемлемое время.
// В качестве входных данных у вас будет массив с весами молекул weights. 
// В качестве выходных данных необходимо в консоль вернуть число, которое обозначает вес последней молекулы. 
// Если молекул не останется, то необходимо вернуть 0.
// Пример работы:  
// Вход: let weights = [2,7,4,1,8,1]
// Выход: 1
// Берём молекулы с весом 7 и 8, превращаем 7 в антимолекулу и сталкиваем её с молекулой весом 8. Остаётся молекула весом 1. 
// Веса оставшихся молекул стали [2,4,1,1,1]. Берём молекулы с весом 2 и 4, превращаем 2 в антимолекулу и сталкиваем её с 
// молекулой весом 4. Остаётся молекула весом 2. Веса оставшихся молекул стали [2,1,1,1]. Берем молекулы с весом 2 и 1, 
// превращаем 1 в антимолекулу и сталкиваем её с молекулой весом 2. Остаётся молекула весом 1. Веса оставшихся молекул стали [1,1,1]. 
// Берем молекулы с весом 1 и 1, превращаем одну из них в антимолекулу и сталкиваем ее со второй. Они аннигилируются. 
// Веса оставшихся молекул [1]. Осталась одна молекула. Результат — 1.

//let weights = [];
let weights = [12,4,3,10,1,20,45,13]; 

for(let i = 0; i = weights.length; i++) {
    if(weights.length>1) {
        weights.sort(function(a, b) {
            return b - a;
        });
        console.log(weights);
        k = parseInt(weights[0]-weights[1]);
        console.log(k);
        weights.shift();
        weights.shift();
        if(k>0) {
            weights.push(k);
        }
        console.log(weights);
    } else {
        console.log(weights);
        break;
    }
}

if(weights.length==1) {
    console.log('осталось 1 молекула с весом '+ weights);
} else {
    console.log('молекул не осталось');
}