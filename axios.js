const axios = require('axios').default;

axios
	.get('https://fortnite-api.com/v1/map', {
		params: {
			lang: 'ru'
		},
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(response => console.log(response.data))
	.catch(error => console.log(error));

// что-то хочу передать
axios
	.post('https://jsonplaceholder.typicode.com/posts', {
		userId: 1, title: 'My title', body: 'My body'
	})
	.then(response => console.log(response.data))
	.catch(error => new Error('error'));

