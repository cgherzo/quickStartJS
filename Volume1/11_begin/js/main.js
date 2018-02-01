var randomNumber = Math.round(Math.random() * 15);

if(randomNumber %3 ===0 && randomNumber !=0){
	if(randomNumber % 5 === 0){
		console.log(randomNumber);
		alert("FizzBuz");
	}else{
	console.log(randomNumber);
	alert("Fizz");
	}
}else if (randomNumber % 5 === 0 && randomNumber){
	alert("Buzz");
}else{
	console.log(randomNumber);
}