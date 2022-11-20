function numbers(a, b) {
	let current = a;

	let timerId = setInterval(function () {
		console.log(current);
		if (current == b) {
			clearInterval(timerId);
		}
		current++;
	}, 1000);
}
numbers(5, 15);