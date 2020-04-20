function compareNum(randomNum){
	numPromise = new Promise(function(resolve, reject){
		if(randomNum > 50){
			resolve("Great job!" + randomNum + " is greater than 50!");
		}else if(randomNum < 50){
			reject("Uh, oh!" + randomNum + " is less than 50!");
		}else{
			console.log("Error, something is wrong!")
		}
	});
	return numPromise
};


compareToTen(50)
	.then(result => console.log(result));
	.catch(error => console.log(error));
compareToTen(8)
	.then(result => console.log(result));
	.catch(error => console.log(error));
