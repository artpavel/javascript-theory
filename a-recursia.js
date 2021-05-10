let count = 0;

function recurse() {
	if (count === 5) return 'stop';
	count++;
	return recurse();
}

console.log(recurse());

// хотим возвести в степень
const pow = (x, y) => {
	if (y === 0) return 1;
	return x * pow(x, y - 1);
};

console.log(pow(5, 3));


function howNumbers(n) {
	if (n < 1) return 0;
	n /= 10;
	return 1 + howNumbers(n);
}


console.log(howNumbers(222));
