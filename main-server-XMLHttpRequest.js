"use strict";
const requestURL = "https://jsonplaceholder.typicode.com/users"


function sendRequest(method, url, body = null) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

// сначала мы открываем запрос
		xhr.open(method, url)

// нужно добавить слушателя. Перед отправкой!!!
		xhr.responseType = 'json'
		xhr.setRequestHeader('Content-Type', 'application/json')
		
		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response)
			} else {
				resolve(xhr.response)
			}
		}
		xhr.onerror = () => {
			reject(xhr.response)
		}
// а теперь его нужно отправить
		xhr.send(JSON.stringify(body))
	})
}

sendRequest('GET', requestURL)
	.then(data => console.log(data))
	.catch(e => console.error(e))

const body = {
	name: 'Pavel',
	age: 26
}

sendRequest('POST', requestURL, body)
	.then(data => console.log(data))
	.catch(e => console.error(e))

