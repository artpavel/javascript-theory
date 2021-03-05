// @ts-check
// let res = prompt("Сколько тебе лет");
// alert(`Тебе ${res}лет`)
// let a = document.querySelector("header");
// console.log(a.textContent);
//
// let main = document.querySelector('main')
//
// let div = document.createElement('div');
// div.classList.add('red')
//
// let h2 = document.createElement('h2');
// h2.innerText = 'Привет, я это написал с помощью javascript'
//
// main.appendChild(div)
// div.appendChild(h2)
//
// function createMyComponent(tag, cls, str, child){
//   let a =  document.createElement(tag);
//   a.classList.add(cls);
//   a.innerText = str;
//   child.appendChild(a);
// }
//
// createMyComponent('p', 'p', 'создал с помощью функции', div)

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }
//
// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   myDisplayer(sum);
// }
//
// myCalculator(5, 5);

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);

// const obj = {
//     bar: 5,
//     foo() {
//         console.log(this.bar);
//     },
//     baz: () => console.log(this),
// }
//
//
//
// const _foo = obj.foo.bind(obj);
//
// _foo()


// const  obj = {
//     foo: 1,
//     bar:{
//         foo: 2,
//         baz: () => this.foo,
//     }
// }
// obj.bar.baz()