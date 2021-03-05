"use strict";
// это простой объект
const animal = {
	name: 'Animal',
	age: 5,
	hasTail: true
}

// а теперь с помощью классов
class Animal{
	constructor(options){
		this.name = options.name;
		this.age = options.age;
		this.hasTail = options.hasTail;
	}
	
	voice(){
		console.log('I am Animal')
	}
}

const animal2 = new Animal({
	name: 'Dog',
	age: 10,
	hasTail: true
})

console.log(animal2)

animal2.voice()
