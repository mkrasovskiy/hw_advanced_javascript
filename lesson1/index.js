// Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.
// let musicCollection = [
//     { name: 'album 1', artist: 'artist 1' },
//     { name: 'album 2', artist: 'artist 2' }
// ]

// musicCollection[Symbol.iterator] = function() {
//     return {
//         current: 0,
//         to: this.length,
//         next() {
//             return this.current < this.to 
//             ? { done: false, value: musicCollection[this.current++] } 
//             : { done: true };
//         }
//     }
// };
// for (let album of musicCollection) {
//     console.log(`${album.name}`);
// }

// -Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:
// -Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// -Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)
// let musicCollection = [
//     { title: "альбом1", artist: "Исполнитель1", year: "2020" },
//     { title: "альбом2", artist: "Исполнитель2", year: "2021" },
//     { title: "альбом3", artist: "Исполнитель3", year: "2022" }
// ]

// musicCollection[Symbol.iterator] = function() {
//     return {
//         current: 0,
//         to: this.length,
//         next() {
//             return this.current < this.to 
//             ? { done: false, value: musicCollection[this.current++] } 
//             : { done: true };
//         }
//     }
// };
// for (let album of musicCollection) {
//     console.log(`${album.title} - ${album.artist}(${album.year})`);
// }

// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// const pizzaMargarita = new Map();
// pizzaMargarita.set('Виктор', '"Маргарита"');
// const pizzaPepperoni = new Map();
// pizzaPepperoni.set('Виктор', '"Пепперони"');

// const sushiPhiladelphia = new Map();
// sushiPhiladelphia.set('Ольга', 'Суши "Филадельфия"');
// const sushiCalifornia = new Map();
// sushiCalifornia.set('Ольга', 'Суши "Калифорния"');

// const tiramisu = new Map();
// tiramisu.set('Дмитрий', 'Тирамису');
// const cheesecake = new Map();
// cheesecake.set('Дмитрий', 'Чизкейк');

// let client = new Map().set('клиент1', 'Алексей')
//                       .set('клиент2', 'Мария')
//                       .set('клиент3', 'Ирина');

// console.log(`Клиент ${client.get('клиент1')} заказал: пиццу ${pizzaPepperoni.get('Виктор')} и ${tiramisu.get('Дмитрий')}.`);
// console.log(`Клиент ${client.get('клиент2')} заказала: ${sushiCalifornia.get('Ольга')} и пиццу ${pizzaMargarita.get('Виктор')}.`);
// console.log(`Клиент ${client.get('клиент3')} заказала: ${cheesecake.get('Дмитрий')}.`);