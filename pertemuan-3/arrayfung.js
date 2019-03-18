var hewan = ['kelinci', 'buaya', 'kadal', 'ular']

function tampil(deret){
	for (var i = 0; i < deret.length; i++) {
		console.log(deret[i]);
	}
}

function tambahakhir(deret, tambahkan){
	var posisi = deret.length;
	deret[posisi] = tambahkan;
	return deret;
}

tampil(hewan);
console.log('========');
hewan = tambahakhir(hewan, 'singa');
tampil(hewan);

