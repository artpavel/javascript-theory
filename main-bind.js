/* понятие слова this in javascript */
function hello() {
	console.log('Hello', this)
}

const person = {
	name: 'John',
	age: 25,
	sayHello: hello,
	sayHelloWindow: hello.bind(window),
	logInfo(job, phone) {
		console.group(`${this.name} info:`)
		console.log(`Name is ${this.name}
age is ${this.age}`)
		console.log(`Job is ${job}`)
		console.log(`Phone is ${phone}`)
		console.groupEnd()
	}
}

// функция покажет глобальный объект
hello()

// а здесь именно объект
person.sayHello()
person.sayHelloWindow()
person.logInfo()

// создали еще один объект
const Lena = {
	name: 'Elena',
	age: 23
}

// bind()
person.logInfo.bind(Lena, 'browser', '5-98-985454')()
person.logInfo.bind(Lena)()

// call()
person.logInfo.call(Lena, 'browser', '5-98-985454')

// apply()
person.logInfo.apply(Lena, ['browser', '5-98-985454'])

// практика
const arr = [1,2,3,4,5]

// function multiply(arr, n){
// 	return arr.map( i => i*n)
// }
// console.log(multiply(arr, 2))

// обратимся к прототипу
Array.prototype.multiply = function (n){
	return this.map(i => i*n)
}
console.log(arr.multiply(5));
