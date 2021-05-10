/*
fetch('https://jsonplaceholder.typicode.com/photos')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(console.error);
	*/

async function getPosts(url) {
	try {
		const response = await fetch(url);
		return await response.json();
	} catch (e) {
		console.warn(e)
	}
}

getPosts('https://jsonplaceholder.typicode.com/photos')
	.then(console.log);
