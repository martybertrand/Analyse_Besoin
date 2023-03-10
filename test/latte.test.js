import Machine from "../src/machine";

describe("Latte", () => {
	test("Machine bouton latté, en stock, bien payé", () => {
		//ETANT DONNE une machine à café
		const machine = new Machine();

		let nbCafeInit = machine.GetNombreCafésServis();
		let nbLaitInit = machine.GetDoseLait();
		let argentInit = machine.GetArgentEncaisse();

		//ET on appuie sur le bouton latté
		machine.AppuiBoutonLatte();

		//QUAND on met 45cts
		machine.Insertion(0.45);

		//ALORS un café coule
		const nbCafeFinal = machine.GetNombreCafésServis();
		expect(nbCafeFinal).toBe(nbCafeInit + 1);

		//ET une dose de lait coule
		const nbLaitFinal = machine.GetDoseLait();
		expect(nbLaitFinal).toBe(nbLaitInit - 1);

		//ET 45cts est encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit + 0.45);
	});

	test("Machine bouton lait, plus de café, bien payé", () => {
		//ETANT DONNE une machine à café 
		const machine = new Machine();

		//Sans café
		machine.SansCafe();

		let nbCafeInit = machine.GetNombreCafésServis();
		let nbLaitInit = machine.GetDoseLait();
		let argentInit = machine.GetArgentEncaisse();

		//ET on appuie sur le bouton latté
		machine.AppuiBoutonLatte();

		//QUAND on met 45cts
		machine.Insertion(0.45);

		//ALORS un café ne coule pas
		const nbCafeFinal = machine.GetNombreCafésServis();
		expect(nbCafeFinal).toBe(nbCafeInit);

		//ET une dose de lait ne coule pas
		const nbLaitFinal = machine.GetDoseLait();
		expect(nbLaitFinal).toBe(nbLaitInit);

		//ET l'argent n'est pas encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit);
	});

	test("Machine bouton lait, plus de lait, bien payé", () => {
		//ETANT DONNE une machine à café
		const machine = new Machine();

		//Sans lait
		machine.AyantXLait(0);
		let nbCafeInit = machine.GetNombreCafésServis();
		let nbLaitInit = machine.GetDoseLait();
		let argentInit = machine.GetArgentEncaisse();

		//ET on appuie sur le bouton latté
		machine.AppuiBoutonLatte();

		//QUAND on met 45cts
		machine.Insertion(0.45);

		//ALORS un café ne coule pas
		const nbCafeFinal = machine.GetNombreCafésServis();
		expect(nbCafeFinal).toBe(nbCafeInit);

		//ET une dose de lait ne coule pas
		const nbLaitFinal = machine.GetDoseLait();
		expect(nbLaitFinal).toBe(nbLaitInit);

		//ET l'argent n'est pas encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit);
	});

	test("Machine bouton lait, pas assez de sous", () => {
		//ETANT DONNE une machine à café
		const machine = new Machine();
		let nbCafeInit = machine.GetNombreCafésServis();
		let nbLaitInit = machine.GetDoseLait();
		let argentInit = machine.GetArgentEncaisse();

		//ET on appuie sur le bouton latté
		machine.AppuiBoutonLatte();

		//QUAND on met 40cts
		machine.Insertion(0.4);

		//ALORS un café ne coule pas
		const nbCafeFinal = machine.GetNombreCafésServis();
		expect(nbCafeFinal).toBe(nbCafeInit);

		//ET une dose de lait ne coule pas
		const nbLaitFinal = machine.GetDoseLait();
		expect(nbLaitFinal).toBe(nbLaitInit);

		//ET l'argent n'est pas encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit);
	});
});
