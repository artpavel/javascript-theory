"use strict";
console.log('start')
console.log('start2')

setTimeout(()=>{
	console.log('Inside timeout, after 2000 seconds')
}, 2000)

// даже если будет 0, все равно пойдет в очередь и будет вызов потом