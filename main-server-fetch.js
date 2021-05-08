"use strict";
const requestURL = "https://jsonplaceholder.typicode.com/users"


function sendRequest(method, url, body = null) {
	const headers = {
		'Content-Type': 'application/json'
	}
	return fetch(url, {
		method: method,
		body: JSON.stringify(body),
		headers: headers
	}).then(response => {
		if(response.ok){
			return response.json()
		}
		return response.json().then(error => {
			const e = new Error("Fatality")
			e.data = error
			throw e
		})
	})
}

// sendRequest('GET', requestURL)
// 	.then(data => console.log(data))
// 	.catch(e => console.error(e))

const body = {
	name: 'Pavel',
	age: 26
}

sendRequest('POST', requestURL, body)
	.then(data => console.log(data))
	.catch(e => console.error(e))


