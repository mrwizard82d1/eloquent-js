function zeroPad(number, width) {
	var result = String(number);
	while (result.length < width) {
		result = '0' + result;
	}
	return result;
}

function printFarmInventory(cows, chickens, pigs) {
	console.log(zeroPad(cows, 3) + ' Cows');
	console.log(zeroPad(chickens, 3) + ' Chickens');
	console.log(zeroPad(pigs, 3) + ' Pigs');
}

printFarmInventory(7, 11, 3);
