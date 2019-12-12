// 1. Создать шаблон объектов «Товар».
// Свойства товара «Имя» и «Цена».
// Создать шаблон объектов «Корзина товаров». 
// Приватные свойства объекта:
// - Массив товаров;
// - Количество товаров;
// - Сумма товаров.
// Методы объекта:
// - Добавить товар;
// - Вернуть сумму товара;
// - Вернуть количество товара.

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Cart() {
  let products = [];
  let privSum = 0;
  let privCnt = 0;

  this.addProduct = function(product) {
      products.push(product);
      privSum += product["price"];
      privCnt++;
  };
  this.addProduct = function(product) {
    products.push(product);
    privSum += product["price"];
    privCnt++;
  };
  this.getSum = function() {
      return privSum;
  };
  this.getCnt = function() {
      return privCnt;
  };
}

let pr1 = new Product("pr1", 50);
let pr2 = new Product("pr2", 25);
let pr3 = new Product("pr2", 125);

let myCart = new Cart();
myCart.addProduct(pr1);
myCart.addProduct(pr2);
console.log(myCart.getSum());
console.log(myCart.getCnt());


// 2. Создать шаблон объектов «Человек».
// Свойства «Имя», «Возраст», «Пол», «Интересы».
// Метод преобразования к строке вида: «Человек: 
// Иван. Возраст: 25 лет. Пол: м. Интересы: 
// музыка, программирование.»
// Создать шаблон объектов «Студент».
// Свойства от наследованные от шаблона объектов 
// «Человек» и добавить «Институт».
// Переопределить метод преобразования к строке 
// вида: «Студент: Иван. Возраст: 25 лет. Пол: м. 
// Интересы: музыка, программирование. 
// Обучается в ИТМО.»

function Man(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests.slice();
    this.toString = () => (`Имя: ${this.name} Возраст: ${this.age} Пол: ${this.gender} Интересы: ${this.interests.toString()}.`);
}
let man = new Man("Иван", 30, "М.", ['музыка', 'программирование']);
console.log(man.toString());


function Student(name, age, gender, interests, institute) {
    Man.call(this, name, age, gender, interests);
    this.institute = institute;
    this.toString = () => (`Имя: ${this.name} Возраст: ${this.age} Пол: ${this.gender} Интересы: ${this.interests.toString()}. Обучается в ${this.institute}`);
}

let student = new Student("Марья", 18, "Ж.", ['музыка', 'программирование'], "ИТМО");
console.log(student.toString());


// 3. Создать шаблон объектов «Пользователь».
// Метод преобразования к строке выводит имя пользователя.
// Два фабричных метода:
// - «Создать анонимного пользователя» не получает аргументов,
//  в качества имя пользователя устанавливает «Аноним».
// - «Создать пользователя из данных» в качества аргументов 
// получает объект с именем и возрастом пользователя.

function User(name) {
    this.name = name;
    this.toString = function() {
        return `Имя: ${this.name}`;
    };
}

User.createAnon = function() {
    let user = new User("Аноним");
    return user;
};

User.createData = function(data) {
    let user = new User(data.name);
    user.age = data.age;
    user.toString = function() {
        return `Имя: ${data.name} возраст: ${data.age}`;
    };
    return user;
};

let a = new User.createAnon();
console.log(a.toString());

let b = new User.createData({ name: 'Анатолий', age: 20 });
console.log(b.toString());


// 4. Выбрать 10 незнакомых (которые не разбирались на занятиях) 
// шаблонов объектов (классов) доступных в глобальной области и 
// привести информацию в виде комментариев в коде для чего 
// они используются. Информацию можно найти в документации 
// (справочные системы по js, статьи по программированию и т.п.).

// /* 1
// Фабричный метод/функция (Factory Pattern/Functions)
// Фабричная функция это просто функция которая возвращает объект. Этот шаблон удобен тем что не требует дополнительного метода для инициализации объекта как это обычно делается в конструкторе. Шаблон является хорошим примером функционального программирования в JavaScript. Например библиотека jQuery построена на использование фабричных функций.
// Одной из главных особенностей этого шаблона определение внутри функции приватных переменных и методов. Для этого достаточно просто исключить их из возвращяемого объекта, но при этом они могут быть доступными через сформированные “замыкания”.


// function Person(name){
//     function walk(){
//         console.log(name+" is walking");
//     }
//     return{
//       name : name,
//       talk: function(){
//         console.log("My name is "+ this.name);
//       }
//     }
//   }
  
//   var person = Person("Ram");
//   person.talk(); // output : My name is Ram
//   person.walk(); // TypeError: person.walk is not a function /**  walk is private as it is not inside returned function **/



// 2
// Шаблон Модуль (Module Pattern)
// Шаблон Module – это порождающий шаблон, инкапсулирующий приватную информацию, методы и переменные, используя замыкания. Он позволяет оборачивать публичные и приватные методы в модули, и тем самым избегать их попадание в глобальный контекст, где они могут конфликтовать с интерфейсами других разработчиков.

// var Module = (function(num) {
//     // Private data is stored within the closure
//     var privateNum = 1;
//     // Because the function is immediately invoked,
//     // the return value becomes the public API
//     var api = {
//      getPrivateData: function() {
//       return privateNum;
//      },
//      getDoublePrivateData: function() {
//       return api.getPrivateData() * num;
//      }
//    };
//    return api;
// })(2);
  
// var num = Module.getPrivateData();
// console.log(num); //1
// var num = Module.getDoublePrivateData();
// console.log(num); // 2


// 3
// Выявляющий модульный шаблон (Revealing Module Pattern)
// Это улучшенная (Christian Heilmann’ом) версия модульного шаблона. Проблема модульных шаблонов в том, что нам приходится создавать новые public функции только для того, чтобы вызывать private функции и переменные.
// В этом шаблоне мы привязываем свойства возвращаемого объекта к private функциям, которые мы хотим показать как public. Поэтому он называется Выявляющий модульный шаблон. 


// const myRevealingModule = (function() {
  
//     let privateVar = 'Peter';
//     const publicVar  = 'Hello World';
//   function privateFunction() {
//       console.log('Name: '+ privateVar);
//     }
    
//     function publicSetName(name) {
//       privateVar = name;
//     }
//   function publicGetName() {
//       privateFunction();
//     }
//   /** reveal methods and variables by assigning them to object     properties */
//   return {
//       setName: publicSetName,
//       greeting: publicVar,
//       getName: publicGetName
//     };
//   })();
//   myRevealingModule.setName('Mark');
//   // prints Name: Mark
//   myRevealingModule.getName();



// 4
// Прототип (Prototype Pattern)
// Шаблон предназначен для создания объекта, который можно использовать в качестве основы для других объектов посредством наследования прототипа. С этим шаблоном легко работать и он очень популярен в JavaScript из-за встроенной поддержки наследования прототипов в JS.


// function Welcome(name) {
//     this.name = name;
// }
// Welcome.prototype.sayHello = function() {
//    return 'Hello, ' + this.name + '!';
// }
// var welcome = new Welcome('Shyam');
// var output = welcome.sayHello();
// console.log(output); //"Hello, Shyam!"

// 5
// Сингельтон (Singleton Pattern)
// Шаблон Singleton – ограничивает создание экземпляра класса одним объектом. После создания первого объекта он будет возвращать ссылку на тот же объект всякий раз, когда будет вызывается инициализация нового.


// var Singleton = (function() {
//     // instance stores a reference to the Singleton
//     var instance;
//     function createInstance() {
//         // private variables and methods
//         var _privateVariable = 'I am a private variable';
//         function _privateMethod() {
//             console.log('I am a private method');
//         }
//         return {
//             // public methods and variables
//             publicMethod: function() {
//                 console.log('I am a public method');
//             },
//             publicVariable: 'I am a public variable'
//         };
//     }
//     return {
//         // Get the Singleton instance if it exists
//         // or create one if doesn't
//         getInstance: function() {
//             if (!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     };
// })();
// // there is no existing instance of Singleton, so it will create one
// var instance1 = Singleton.getInstance();
// // there is an instance of Singleton, so it will return the reference to this one
// var instance2 = Singleton.getInstance();
// console.log(instance1 === instance2); // true
// instance2.publicMethod();  //'I am a public method'

// 6
// Абстрактная фабрика (Abstract Factory Pattern)
// Шаблон абстрактной фабрики – это еще один порождающий шаблон, который можно использовать для определения взаимосвязанных экземпляров или объектов не специфицируя их конкретных классов.


// function Car() {
//     this.name = "Car";
//     this.wheels = 4;
// }
// function Tractor() {
//     this.name = "Tractor";
//     this.wheels = 4;
// }
// function Bike() {
//     this.name = "Bike";
//     this.wheels = 2;
// }
// const vehicleFactory = {
//     createVehicle: function(type) {
//         switch (type.toLowerCase()) {
//             case "car":
//                 return new Car();
//             case "tractor":
//                 return new Tractor();
//             case "bike":
//                 return new Bike();
//             default:
//                 return null;
//         }
//     }
// };
// var car = vehicleFactory.createVehicle("Car");
// console.log(car); // Car { name: "Car", wheels: 4 }

// 7
// Фабрика с Композицией (Factory with Composition)
// Этот шаблон используется для назначения поведений объектам когда нужно избегать нежелательного наследования.

// /**
//   Behaviour factories
// **/
// var drinks = function Drinks(type){
//     var drink_type = type || 'Water';
//     return {
//         startDrink: function(){
//             console.log("Start to drink "+ drink_type);
//         }
//     }
// }
// var eat = function Eat(type){
//     var eat_type = type || 'Rice';
//     return {
//         startEat: function(){
//             console.log("Start to eat "+ eat_type);
//         }
//     }
// }
// /**
//   Object factories
// **/
// var person = function (drink, food) {
//     return Object.assign(
//         {},
//        drinks(drink),
//        eat(food)
//     );
//     // Merge our 'behaviour' objects
// };
// var person = person('Wine', 'Noodles');
// person.startDrink(); //"Start to drink Wine"
// person.startEat(); //"Start to eat Noodles"

// 8
// Шаблон Декоратор
// Декоратор применяют чтобы расширить функциональность объекта, не модифицируя при этом существующий класс или функцию-конструктор. Этот шаблон можно использовать для добавления новых фич к объекту, не затрагивая базовый код.

// function Car(name) {
//     this.name = name;
//   // Default values
//     this.color = 'White';
//   }
//   // Creating a new Object to decorate
//   const tesla= new Car('Tesla Model 3');
//   // Decorating the object with new functionality
//   tesla.setColor = function(color) {
//     this.color = color;
//   }
//   tesla.setPrice = function(price) {
//     this.price = price;
//   }
//   tesla.setColor('black');
//   tesla.setPrice(49000);
//   // prints black
//   console.log(tesla.color);


// // 9
// // Facade
// // Используйте для создания простого интерфейса (упрощает функциональность, как например jQuery).

// // Facade Pattern //
// // абстрагирует от некоторых сложных/неряшлевых вещей
// var $ = function (target) {
//     return new MemeQuery(target);
//   };
//   function MemeQuery (target) {
//     this.target = document.querySelector(target);
//   }
//   MemeQuery.prototype.html = function(html) {
//     this.target.innerHTML = html;
//     return this;
//   };
//   // теперь, все, что мы будем видеть и использовать это  $
//   $('#myParagraph').html('Meeemee').html('Some JS design patterns');
//   //окей, возможно это и не лучший пример..
//   // просто посмотрите в исходный код jQuery, там полно примеров фасада
//   // он нужен просто для того, чтоб увести нас от того, чтоб заострять внимание на сложностях проектирования и сделать проектирование быстрее и проще.


// // 10
// // Observer
// // Позволяет объектам наблюдать за объектами и быть оповещенными об изменениях.

// // Observer Pattern //
// // https://github.com/CodeDraken/emtr/blob/master/emitter.js

// // an event emitter
// function Emitter() {
//     // observer list
//     this.events = {};
//     // looks like:
//     // {
//     //  greet: [function, function, function]
//     // }
//   }
  
//   Emitter.prototype.on = function(type, listener) {
//     this.events[type] = this.events[type] || [];
//     this.events[type].push(listener);
//   }
  
//   Emitter.prototype.emit = function(type) {
//     if(this.events[type]) {
//       this.events[type].forEach(function(listener) {
//         listener();
//       });
//     }
//   }
  
//   // app
//   var emtr = new Emitter();
  
//   // observers
//   emtr.on('greet', function() {
//      console.log('Welcome!');
//    });
  
//    emtr.on('greet', function() {
//      console.log('Greetings!');
//    });
  
//    emtr.emit('greet'); 
//   // Welcome!
//   // Greetings!




// 5.* Перенести в ОО-код следующий пример из реального мира:
// - есть курсы, учителя и ученики
// - у каждого курса есть свой учитель
// - у каждого учителя есть своя группа учеников
// Определите какие объекты есть в этом примере, какие у них 
// свойства и какие методы, как эти объекты будут между собой 
// взаимодействовать, например, к курсу можно добавить учителя.
// Создайте все необходимые шаблоны объектов (классы) и приведите 
// пример их использования.
function Course(title, duration, site, requirements) {
    this.title = title;
    this.duration = duration;
    this.site = site;
    this.requirements = requirements.slice();
    this.toString = () => (`Название: ${this.title} Продолжительность (мес.): ${this.duration} Место: ${this.site} Требования к студентам: ${this.requirements.toString()}.`);
}
let cour = new Course ("Frontend", 4, "ITMO", ['успешно сданные вступительные испытания', 'оплата обучения']);
console.log(cour.toString());

function Teacher(name, experience, knowledge) {
    this.name = name;
    this.experience = experience;
    this.knowledge = knowledge.slice();
    this.course = cour;
    this.toString = () => (`Имя: ${this.name} Опыт: ${this.experience} Знания: ${this.knowledge.toString()} Кyрс: ${this.course} `);
}
let teach = new Teacher ("Александр Разыграев", 10, ['Frontend', 'JS', 'Node', 'Vue']);
console.log(teach.toString());

function Students(group) {
    this.group = group;
    this.teacher = teach;
    this.toString = () => (`Группа: ${this.group}  Учитель: ${this.teacher}`);
}
let stud = new Students ("№*****");
console.log(stud.toString());

 