const copyArrayAndSquareNums = (arr) => {
	const output = [];
	for (let el of arr) {
		output.push(el ** 2);
	}
	return output;
};

const copyArrayAndDivideTwo = (arr) => {
	const output = [];
	for (let el of arr) {
		output.push(el / 2);
	}
	return output;
};

const square = (num) => num ** 2;


const divide = (num) => num / 2;


/* у нас практически одинаковые функции. Разница только в том,
что делают разные операции. Поэтому создаем фукцию
*/
const copyArrayAndDoSmth = (arr, instruction) => {
	const output = [];
	for (let el of arr) {
		output.push(instruction(el));
	}
	return output;
};

const arr = [ 2, 4, 6 ];
const a = copyArrayAndDoSmth(arr, square);
const b = copyArrayAndDoSmth(arr, divide);

console.log(a);
console.log(b);
