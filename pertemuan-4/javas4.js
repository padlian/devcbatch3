$(".proses").click(function(){
	var angka1 = parseInt($("#val1").val());
	var angka2 = parseInt($("#val2").val());

	var opt = $(this).html();

	if (opt == "+") {
		var hasil = angka1 + angka2;
	}
	else if (opt == "-") {
		var hasil = angka1 - angka2;
	}
	else if (opt == "x") {
		var hasil = angka1 * angka2;
	}
	else if (opt == "/") {
		var hasil = angka1 / angka2;
	}

	$("#hasil").html(hasil);
	// alert("hasilnya adalah" + hasil);
});