export function swallowError(error) {
	console.error(error.toString());
	this.emit('end')
}