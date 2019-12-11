// ##### Занятие 9:
// 1. Модули
// ##### Домашнее задание:
// 1. Написать свою подключаемую js библиотеку для работы с массивом, хранящим целые числа.
// Библиотека должна обладать следующими методами:
// - поиск минимального элемента в переданном массиве;
// - поиск максимально элемента в переданном массиве;
// - расчет среднего арифметического значения элементов переданного массива;
// - создание копии (клонирование) переданного массива.
let arr = [1, 0, 10, -22, 68, 25, -9];
console.log(arrUtils.min(arr));
console.log(arrUtils.max(arr));
console.log(arrUtils.average(arr));
let arr2 = arrUtils.clone(arr);
console.log(arr2);

// 2. Подключить стороннюю библиотеку для построения графиков.
// Построить график функции y = f(x):
// y = 5/x, при x>=1;
// y = x*x – 4*x, при x<1.
// Шаг варьирования x равен 0.01 и интервал варьирования -5 < x < 5.
// Расчёт функции y = f(x) реализовать в виде отдельной функции.
let line1 = {
  x:[],
  y:[],
  type:'scatter'
};

function calcY(x){
  let y;
  if(x>=1){
      y = 5 / x;
  } else {
      y = x * x;
  }
  return y;
}

for(let i = 0; i <= 25; i++){
  line1.x.push(i);
  line1.y.push(calcY(i));
}

let layout = {
  title: 'График',
  xaxis: {
      title: 'Ось Х',
      showgrid: false,
      zeroline: false
  },
  yaxis: {
      title: 'Ось У',
      zeroline: false
  }
};

Plotly.newPlot('placeholder', [line1], layout);


// // 3. Подключить стороннюю библиотеку для юнит тестирования.
// // Написать несколько тестов для функции, рассчитывающей y = 1/x + sqrt(x).

function pow(x) {
  return 1/x + Math.sqrt(x);
}

  
// // 4. Написать функцию генерации поля n x n (значение n - аргумент функции), 
// // в ячейки рандомно спрятать несколько призов. 
// // Пользователю дается 3 попытки найти их - по нажатию на ячейку либо открывается приз 
// // (иконка, изменения цвета и тд), либо иконка, сообщающая, что приза нет. 
// // Количество оставшихся попыток выводим рядом с игровым полем.


let count = 3;
const task_4 = document.getElementById('task_4');
const shot = document.querySelector(".shot");

function setPrize(n) {
  let prize = ['img/car.jpg', 'img/book.jpg', 'img/el.jpg'];
  for (let i = 0; i < n * n; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    if ((i !== 0) && (i % n === 0)) {
      task_4.append(document.createElement('br'));
    }
    const img = document.createElement('img');
    img.classList.add('prize');
    if (Math.floor(Math.random() * 2)) {
      img.src = prize[Math.floor(Math.random() * 3)];
    } else {
      img.src = 'img/sad.png';
    }
    card.append(img);
    task_4.append(card);
  }
}

task_4.addEventListener(`click`, (event) => {
  const card = event.target;
  if (count > 0 && card.classList.contains('card')) {
    const img = card.querySelector("img");
    img.classList.add(`prize-visible`);
    count--;
    shot.textContent = count;
  }
});

setPrize(4);

// 5*. Написать функцию, которая будет осуществлять сортировку таблицы из  
// предыдущего дз по значениям столбца при нажатии на название этого столбца.
let books = [ {
  art: `12566`,
  author: `Роджер Желязны`,
  title: `Девять принцев Амбера`,
  desc: `Девять Принцев — девять претендентов на опустевший трон, девять братьев, в одночасье ставших врагами...
          Король Амбера, Оберон, исчез, и вот уже в Амбере междоусобица — его сыновья сражаются друг с другом... 
          Принц Корвин кознями собственного брата лишен памяти, но сможет ли это остановить Принца Амбера в его борьбе за власть?`
},
{
  art: `12567`,
  author: `Роджер Желязны`,
  title: `Ружья Авалона`,
  desc: `Проклятье Принца Амбера, произнесенное в ярости и скрепленное страданиями и кровью, всегда сбывается.
          Вырвавшись из заточения, Корвин обнаруживает, что темные силы, вызванные им, грозят неминуемой гибелью не только его врагам, но и ему самому и всему тому, что ему дорого.
          И теперь Принц Корвин должен решить, что ему важнее — месть или благополучие Амбера.`
},
{
  art: `12568`,
  author: `Роджер Желязны`,
  title: `Знак Единорога`,
  desc: `Неизвестный враг рвется к Амберу, над которым нависло страшное проклятье. Убит еще один Принц. Черный лес, порожденный проклятьем Корвина, неумолимо                 расширяется. Лабиринт — первооснова Амбера и окружающих его Теней — поврежден, а в самом сердце королевства по-прежнему плетутся заговоры и интриги. Перед            лицом общего врага королевская семья должна объединиться, но старая вражда не забыта.
        Единственная надежда Амбера — знак Единорога, попавший в руки Корвина, об истинной силе которого он и не подозревает.`
},
{
  art: `12569`,
  author: `Роджер Желязны`,
  title: `Рука Оберона`,
  desc: `Древний Хаос пробуждается! Тьма поглощает души отпрысков короля Янтарного королевства Оберона... Лабиринт Амбера поврежден, и лишь великий артефакт, Камень          Правосудия, может восстановить его. Но чтобы заполучить Камень, принцу Корвину предстоит узнать многое о своем отце и о самом себе... Четвертая книга                 культового цикла «Хроники Амбера»!`
},
{
  art: `12570`,
  author: `Роджер Желязны`,
  title: `Владения Хаоса`,
  desc: `Противостояние Хаоса и Амбера достигло своей высшей точки. Оберон вернулся, и Камень Правосудия отошел к своему законному владельцу. Лабиринт должен быть            восстановлен, но если Оберон не справится с этой задачей, Амбер и окружающие его Тени погибнут.
  И тогда за дело должен будет взяться Корвин...`
},];

function getTable(e) {
    books.forEach(element => {
        let booksTable = document.getElementById("books");
        booksTable.insertAdjacentHTML("beforeend", `
      <tr><td>${element.art}</td><td>${element.author}</td><td>${element.title}</td><td>${element.desc}</td></tr>
      `);
    });

    document.addEventListener('DOMContentLoaded', () => {

        const getSort = ({target}) => {
            const order = (target.dataset.order = -(target.dataset.order || -1));
            const index = [...target.parentNode.cells].indexOf(target);
            const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
            const comparator = (index, order) => (a, b) => order * collator.compare(
                a.children[index].innerHTML,
                b.children[index].innerHTML
            );

            for (const tBody of target.closest('table').tBodies)
                tBody.append(...[...tBody.rows].sort(comparator(index, order)));

            for (const cell of target.parentNode.cells)
                cell.classList.toggle('sorted', cell === target);
        };

        document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));

    });


}
getTable(books);