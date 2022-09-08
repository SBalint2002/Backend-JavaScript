let tomb = [];
function getRandomInt() {
	return Math.floor(Math.random() * 101);
  }
for (let i = 0; i < 10; i++){
	tomb[i] = getRandomInt();
}

tomb.sort(function(b, a){return b-a});
console.log(tomb);

