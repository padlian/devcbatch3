$("#tambah").click(function(){
	var angka1 = parseInt($("#val1").val());
	var angka2 = parseInt($("#val2").val());

	var hasil = angka1 + angka2;
	alert("hasilnya adalah" + hasil);
});