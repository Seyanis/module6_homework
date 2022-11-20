function getSum(x) {
	return function (y) {
		return x + y;
	};
}
console.log(getSum(1)(2), getSum(2)(3), getSum(35)(7));