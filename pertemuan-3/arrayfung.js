var hewan = ['kelinci', 'buaya', 'kadal', 'ular', 'singa', 'entok', 'kawan disebelah anda']

function tampil(deret){
	for (var i = 0; i < deret.length; i++) {
		console.log(deret[i]);
	}
	console.log('========================');
}

function tambahakhir(deret, tambahkan){
	var posisi = deret.length;
	deret[posisi] = tambahkan;
	return deret;
}

function ubahakhir(deret, ubahdengan){
	var posisi = deret.length-1;
	deret[posisi] = ubahdengan;
	return deret;
}

function hapusakhir(deret){
	var deretbaru = [];
	var batas = deret.length-1;
	for (var i = 0; i < batas; i++) {
		deretbaru[i] = deret[i];
	}
	return deretbaru;
}

// function tengokkandulu(deret, jlhdata){
// 	for (var i = 0; i < jlhdata; i++) {
// 		console.log(deret[i]);
// 	}
// 	console.log('========================');
// }
function tengokkandulu(deret, sebanyak, mulai = 0){
	hitung=0;
	i=mulai;
	while(hitung < sebanyak){
		console.log(deret[i]);
		i++;
		hitung++;
	}
	console.log('========================');
}
console.log(hewan);
tampil(hewan);
hewan = tambahakhir(hewan, 'singa');
tampil(hewan);
hewan = ubahakhir(hewan, 'harimau');
tampil(hewan);
hewan = hapusakhir(hewan, 'harimau');
tampil(hewan);

tengokkandulu(hewan, 3);
tengokkandulu(hewan, 3, 3);













