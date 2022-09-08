let tomb = [];

for(let i = 0; i < 20; i++){
	var obj = {
		nev: "Cirmos " + i,
		eletkor: Math.floor(Math.random() * (9 - 2 + 1) + 2)
	}
	tomb.push(obj);
}

for(let i = 0; i < tomb.length; i++){
	if(tomb[i].eletkor == 2){
		console.log(tomb[i].nev + " " + tomb[i].eletkor);
	}
}