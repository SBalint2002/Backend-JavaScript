var szam = 0;
window.setInterval(
	function () {
		szam = szam + 1;
		document.getElementById("szamolas").innerHTML = szam;

	}, 2000);