function ambilrandom(){
	return Math.floor(Math.random() * 5) + 1;
}


function pilihwarna(){
	var kode = ambilrandom();

	if (kode == 1) {
		return "RED";
	}
	else if (kode == 2) {
		return "GREEN";
	}
	else if (kode == 3) {
		return "BLUE";
	}
	else if (kode == 4) {
		return "YELLOW";
	}
	else if (kode == 5) {
		return "BLACK";
	}
}


$(".tombol").click(function(){
	var warna = pilihwarna();
	$("#kotak").css("background", warna);
});