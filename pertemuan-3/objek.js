var manusia = {
	kepala : [
		"rambut", //0
		"mata", //1
		{ //2
			fulan : "budi",
			fulanah : "budina"
		}
	],
	badan : "ini badan",
	kaki : {
		lutut : "ini lutut",
		tumit : "nais tumit yu"
	}
}

console.log(manusia);
console.log(manusia.kepala);
console.log(manusia.kepala[1]);
console.log(manusia.badan);
console.log(manusia.kaki.tumit);
console.log(manusia.kepala[2].fulanah);