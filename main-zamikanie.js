"use strict";
function createCalcFunction(n){
	return function(){
		console.log(1000*n)
	}
}

const calc =  createCalcFunction(42)
calc()

//конкретные примеры
//1
function createIncrement(n){
	return function (num) {
		return n + num
	}
}

const add = createIncrement(50)
console.log(add(42))

//2
function urlGenerator(domain){
	return function (url){
		return`https://${url}.${domain}`
	}
}

const comUrl = urlGenerator('com')
const netUrl = urlGenerator('net')

console.log(comUrl('google'))
console.log(netUrl('ukr'))

//3
function bind(context, fn){
	return function (...args){
		fn.apply(context, args)
	}
}

function logPerson(){
	console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Bob', age: 22, job: 'Frontend'}
const person2 = {name: 'Elena', age: 33, job: 'SEO'}

bind(person1, logPerson)()
bind(person2, logPerson)()

// const myFun = (obj) => {
// 	console.log(`Person: ${obj.name}, ${obj.age}, ${obj.job}`)
// }
// myFun(person1)
