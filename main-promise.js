'use strict';
/*
// это мы даем запрос
console.log('Request data...')

// это сервер думает
setTimeout(() => {
	console.log('Preparing data...')
	
	// а это мы получаем ответ
	const backendData = {
		server: 'aws',
		port: 8080,
		status: 'working',
	}
	
	setTimeout(() => {
		backendData.modified = true
		console.log('Data received', backendData)
	}, 2000)
	
}, 2000)

*/

// а теперь делаем с помощью Promise
console.log('Request data...');
const p = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Preparing data...');
		const backendData = {
			server: 'dbs',
			port: 3000,
			status: 'working'
		};
		// этим мы говорим Promise, что операция удачна
		resolve(backendData);
	}, 2000);
});

p.then(data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data.modified = true;
			resolve(data);
		}, 2000);
	});
}).then(clientData => {
	console.log('Data received', clientData);
});

// создал функцию
function araFetch() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('hello from promise');
		}, 2000);
	});
}

araFetch()
	.then(response => {
		console.log(response);
		return response + '!';
	})
	.then(console.log)
	.catch(console.error)
	.finally(() => console.log('operation complete'));

// используем для fetch()
fetch('https://jsonplaceholder.typicode.com/photos')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(console.error);
