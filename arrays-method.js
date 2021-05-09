'use strict';

const numbers = [ 1, 2, 3, 4, 5 ];
const lungs = [ 'HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'PHP' ];

const basket = [
	{
		id: 1,
		name: 'JS book',
		price: 900,
		quantity: 1
	},
	{
		id: 2,
		name: 'CSS book',
		price: 700,
		quantity: 1
	},
	{
		id: 3,
		name: 'PHP book',
		price: 900,
		quantity: 1
	}
];

let result = numbers.indexOf(900);
// indexOf() - возвратил индекс или -1
result = numbers.indexOf(5);

//includes - возвращает true or false
result = numbers.includes(900);

// obj.find() - поиск по объектам
result = basket.find(el => el.name === 'PHP book');

// obj.findIndex() - поиск по объектам
result = basket.findIndex(el => el.name === 'book');

// forEach
result = numbers.forEach(el => console.log(el));

// map
result = basket.map(el => ({name: el.name, price: el.price}))

// filter
result =basket.filter(el => el.quantity === 1)

// reduce - гармошка
result = basket.reduce((acc, crr) => acc + crr.price, 0)

console.log(`result`, result);
