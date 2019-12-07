// ##### Занятие 7:
// 1. DOM дерево
// 2. Таймеры
// 3. Дата и время
// ##### Домашнее задание:
// 1. Создать функцию которая выводит время 
// в html и обновляет значения каждую секунду. 
// Время выводить в формате чч:мм:cc, при этом
// часы, минуты и секунды отобразить разными цветами.

const hw7_1 = document.createElement('div');
const clock = document.createElement('div');
const hours = document.createElement('span');
const min = document.createElement('span');
const sec = document.createElement('span');

hw7_1.classList.add("hw7_1");
clock.classList.add("clock");
hours.classList.add("hours");
min.classList.add("min");
sec.classList.add("sec");

hw7_1.append(clock);
clock.append(hours, `:`, min, `:`, sec);
document.body.append(hw7_1);

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

setInterval(() => {
    hours.innerText = (addZero((new Date).getHours()));
    min.innerText = (addZero((new Date).getMinutes()));
    sec.innerText = (addZero(((new Date).getSeconds())));
}, 1000);


// 2. Дан массив с объектами, где каждый объект 
// описывает товар: фото, артикул, описание и т.п.
// Сформировать функцию, которой передаётся массив 
// товаров, и которая создаст и внесёт все 
// необходимые html элементы, стили, и содержание 
// для отображения всей информации о товарах.

let arr = [{
        name: 'Худи "Хохлома"',
        id: `id: 147522`,
        photo: `img/1.jpg`,
        description: `Детали изделия: Карманы, капюшон, сетка в капюшоне`,
        description2: `Принт: Выдерживает неограниченное количество стирок`,
        description3: `Качество: Экологичная ULTRA HD печать`,
        description4: `Ткань: Сандвич, 180 гр/кв. м`,
        description5: `Состав: 40% хлопок, 60% микрофибра`,
    },
    {
        name: 'Худи "Борщ"',
        id: `id: 194655`,
        photo: `img/2.jpg`,
        description: `Детали изделия: Карманы, капюшон, сетка в капюшоне`,
        description2: `Принт: Выдерживает неограниченное количество стирок`,
        description3: `Качество: Экологичная ULTRA HD печать`,
        description4: `Ткань: Сандвич, 180 гр/кв. м`,
        description5: `Состав: 40% хлопок, 60% микрофибра`,
    },
    {
        name: 'Худи "Хохлома"',
        id: `id: 245786`,
        photo: `img/3.jpg`,
        description: `Детали изделия: Карманы, капюшон, сетка в капюшоне`,
        description2: `Принт: Выдерживает неограниченное количество стирок`,
        description3: `Качество: Экологичная ULTRA HD печать`,
        description4: `Ткань: Сандвич, 180 гр/кв. м`,
        description5: `Состав: 40% хлопок, 60% микрофибра`,
    },
    {
        name: 'Худи "Матрешки"',
        id: `id: 245796`,
        photo: `img/4.jpg`,
        description: `Детали изделия: Карманы, капюшон, сетка в капюшоне`,
        description2: `Принт: Выдерживает неограниченное количество стирок`,
        description3: `Качество: Экологичная ULTRA HD печать`,
        description4: `Ткань: Сандвич, 180 гр/кв. м`,
        description5: `Состав: 40% хлопок, 60% микрофибра`,
    },
    {
        name: 'Худи "Клубнички"',
        id: `id: 244886`,
        photo: `img/5.jpg`,
        description: `Детали изделия: Карманы, капюшон, сетка в капюшоне`,
        description2: `Принт: Выдерживает неограниченное количество стирок`,
        description3: `Качество: Экологичная ULTRA HD печать`,
        description4: `Ткань: Сандвич, 180 гр/кв. м`,
        description5: `Состав: 40% хлопок, 60% микрофибра`,
    },
    {
        name: 'Худи "Россия"',
        id: `id: 277786`,
        photo: `img/6.jpg`,
        description: `Детали изделия: Карманы, капюшон, сетка в капюшоне`,
        description2: `Принт: Выдерживает неограниченное количество стирок`,
        description3: `Качество: Экологичная ULTRA HD печать`,
        description4: `Ткань: Сандвич, 180 гр/кв. м`,
        description5: `Состав: 40% хлопок, 60% микрофибра`,
    }
];

function addCards(arr) {
    const cards = document.createElement('div');
    cards.classList.add(`cards`);
    cards.style =
        `margin: .5em 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 1em;`
    document.body.append(cards);

    for (let i = 0; i < arr.length; i++) {
        const card = document.createElement('div');
        card.style =
            `width: 20em;
            padding: 1em;
            margin-bottom: 1em;
            margin-right: 1em;
            text-align: center;            
            background-color: white;
            border-radius: 1em;
            box-shadow: 0 1em 2em rgba(0,0,0,0.25), 0 .8em .8em rgba(0,0,0,0.22);`;             

        const title = document.createElement('h3');
        title.style = `color: rgb(70, 61, 78);`;
        title.append(arr[i].name);

        const id = document.createElement('p');
        id.style =
            `padding: 0;
            margin: 1em;
            color: rgb(179, 36, 36);
            text-align: left;`;
        id.append(arr[i].id);

        const img = document.createElement('img');
        img.src = arr[i].photo;
        img.style = `width: 80%;
                    border-radius: 1em;`;

        const description = document.createElement('p');
        description.style =
            `padding: 0;
            margin: .5em 1em;
            color: rgb(70, 61, 78);
            text-align: justify;`
        description.append(arr[i].description);

        const description2 = document.createElement('p');
        description2.style =
            `padding: 0;
            margin: .5em 1em;
            color: rgb(70, 61, 78);
            text-align: justify;`
        description2.append(arr[i].description2);

        const description3 = document.createElement('p');
        description3.style =
            `padding: 0;
            margin: .5em 1em;
            color: rgb(70, 61, 78);
            text-align: justify;`
        description3.append(arr[i].description3);

        const description4 = document.createElement('p');
        description4.style =
            `padding: 0;
            margin: .5em 1em;
            color: rgb(70, 61, 78);
            text-align: justify;`
        description4.append(arr[i].description4);

        const description5 = document.createElement('p');
        description5.style =
            `padding: 0;
            margin: .5em 1em;
            color: rgb(70, 61, 78);
            text-align: justify;`
        description5.append(arr[i].description5);

        card.append(title, id, img, description, description2, description3, description4, description5);
        cards.append(card);
    }

    document.body.append(cards);
}

addCards(arr);


// 3. Создать светофор (красный, желтый, 
// зелёный). Переключать цвет у светофора 
// через каждые 2 сек сверху вниз и снизу вверх.
const svet = document.createElement('div');
const red = document.createElement('div');
const yellow = document.createElement('div');
const green = document.createElement('div');
const svetArr = svet.children;

svet.classList.add("svet");
red.classList.add("circle", "red", "activ");
yellow.classList.add("circle", "yellow");
green.classList.add("circle", "green");

svet.append(red, yellow, green);
hw7_1.append(svet);

let relay = true;
let i = 0;
setInterval(() => {
  if (relay) {
    svetArr[i].classList.remove("activ");
    svetArr[i + 1].classList.add("activ");
    i++;
    if (i == 2) {
      relay = false;
    }
  } else {
    svetArr[i].classList.remove("activ");
    svetArr[i - 1].classList.add("activ");
    i--;
    if (i == 0) {
      relay = true;
    }
  }
}, 2000);

// 4*. Создать функцию которая выводит в html количество дней, 
// часов и минут до нового года и обновляет значения каждую минуту. 
// Датой наступления нового года считается 1 января. Функция выводит в html 
// строку вида: "14 дней 21 час 46 минут". Нужно реализовать корректные 
// окончания слов, например: 1 день, 2 дня, 5 дней. 
// Функция должна корректно работать при запуске в любом году, 
// т. е. грядущий год должен вычисляться программно.

let nYear = document.createElement('div');
let nDay = document.createElement('span');
let d = document.createElement('span');
let nHours = document.createElement('span');
let h = document.createElement('span');
let nMin = document.createElement('span');
let m = document.createElement('span');

nYear.classList.add("nYear");
nDay.classList.add("nDay");
nHours.classList.add("nHours");
nMin.classList.add("nMin");
d.classList.add("d");
h.classList.add("h");
m.classList.add("m");

hw7_1.append(nYear);
nYear.append(`До Нового года осталось: `, nDay, d, nHours, h, nMin, m);


var nD ="",
    nH ="",
    nM ="";

function addDay() {
    nD = Math.floor((Math.floor(((new Date((new Date().getFullYear()+1), 0, 1)) - (new Date())) / 1000))/86400);
    return nD;
}

function addHours() {
    nH = Math.floor((Math.floor(((new Date((new Date().getFullYear()+1), 0, 1)) - (new Date())) / 1000)) % 86400 / 3600);
    return nH;
}

function addMin() {
    nM = Math.floor((Math.floor(((new Date((new Date().getFullYear()+1), 0, 1)) - (new Date())) / 1000)) % 86400 % 3600 / 60);
    return nM;
}

function addD() {
    if (nD === 1 || (nD%10 == 1 && nD != 11  && nD != 111 && nD != 211 && nD != 311)) {
        d = " день ";
    } else if (nD == 2 || nD == 3 || nD == 4 || nD%10 == 2 || nD%10 == 3 || nD%10 == 4) {
        d = " дня ";
    } else d = " дней "

    return d;
}


function addH() {
    if (nH == 1 || nH == 21) {
        h = " час ";
    } else if ((nH  >= 2 && nH  <= 4) || nH >= 22) {
        h = " часа ";
    }else h = " часов "

    return h;
}


function addM() {
    if (nM === 1 || (nM%10 == 1 && nM != 11)) {
        m = " минута ";
    }else if ((nM >= 2 && nM <= 4) || (nM%10 >= 2 && nM%10 <= 4)) {
        m = " минуты ";
    } else m = " минут "

    return m;
}


    function addZero2(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    let hw7_4 = setInterval(() => {
        nDay.innerText = (addZero2(addDay()));
        d.innerText = (addD());
        nHours.innerText = (addZero2(addHours()));
        h.innerText = (addH());
        nMin.innerText = (addZero2(addMin()));
        m.innerText = (addM());
    }, 1000);




