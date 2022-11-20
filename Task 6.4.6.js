function primeNumber(num) {
	if ((num < 2) || (num > 1000)) {
		return "данные неверны!";
	} else {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	}
}
let randomNumber = Math.floor(Math.random() * 2000);
let a = primeNumber(randomNumber);
console.log("Число " + randomNumber + ' простое число = ' + a);