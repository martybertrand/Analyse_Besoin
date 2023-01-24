import Machine from "../src/machine";

describe("ChocoLait", () => {
	test("Machine bouton chocolait, en stock, bien payé", () => {
		//ETANT DONNE une machine à café où on appuie sur le bouton chocolait
		const machine = new Machine();

		let nbCafeInit = machine.GetNombreCafésServis();
		let nbLaitInit = machine.GetDoseLait();
		let nbChocolatInit = machine.GetDoseChoco();
		let argentInit = machine.GetArgentEncaisse();

		machine.AppuiBoutonChocoLait();

		//QUAND on met 45cts
		machine.Insertion(0.45);

		//ALORS une boisson coule
		const nbCafeFinal = machine.GetNombreCafésServis();
		expect(nbCafeFinal).toBe(nbCafeInit + 1);

		//ET une dose de lait coule
		const nbLaitFinal = machine.GetDoseLait();
		expect(nbLaitFinal).toBe(nbLaitInit - 1);

		//ET une dose de chocolat coule
		const nbChocolatFinal = machine.GetDoseChoco();
		expect(nbChocolatFinal).toBe(nbChocolatInit - 1);

		//ET 45cts est encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit + 0.45);
	});

	test("Machine bouton chocolait, plus de café, bien payé", () => {
		//ETANT DONNE une machine à café où on appuie sur le bouton chocolait qui n'a plus de chocolat
		const machine = new Machine();
		machine.AyantXChoco(0);
		let nbCafeInit = machine.GetNombreCafésServis();
		let nbLaitInit = machine.GetDoseLait();
		let nbChocolatInit = machine.GetDoseChoco();
		let argentInit = machine.GetArgentEncaisse();
		machine.AppuiBoutonChocoLait();

		//QUAND on met 45cts
		machine.Insertion(0.45);

		//ALORS une boisson ne coule pas
		const nbCafeFinal = machine.GetNombreCafésServis();
		expect(nbCafeFinal).toBe(nbCafeInit);

		//ET une dose de lait ne coule pas
		const nbLaitFinal = machine.GetDoseLait();
		expect(nbLaitFinal).toBe(nbLaitInit);

		//ET une dose de chocolat ne coule pas
		const nbChocolatFinal = machine.GetDoseChoco();
		expect(nbChocolatFinal).toBe(nbChocolatInit);

		//ET l'argent n'est pas encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit);
	});

	test("Machine bouton chocolait, plus de lait, bien payé", () => {
		//ETANT DONNE une machine à café où on appuie sur le bouton chocolait qui n'ai plus de lait
		const machine = new Machine();
		machine.AyantXLait(0);
		let nbCafeInit = machine.GetNombreCafésServis();
		let nbLaitInit = machine.GetDoseLait();
		let nbChocolatInit = machine.GetDoseChoco();
		let argentInit = machine.GetArgentEncaisse();
		machine.AppuiBoutonChocoLait();

		//QUAND on met 45cts
		machine.Insertion(0.45);

		//ALORS une boisson ne coule pas
		const nbCafeFinal = machine.GetNombreCafésServis();
		expect(nbCafeFinal).toBe(nbCafeInit);

		//ET une dose de lait ne coule pas
		const nbLaitFinal = machine.GetDoseLait();
		expect(nbLaitFinal).toBe(nbLaitInit);

		//ET une dose de chocolat ne coule pas
		const nbChocolatFinal = machine.GetDoseChoco();
		expect(nbChocolatFinal).toBe(nbChocolatInit);

		//ET l'argent n'est pas encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit);
	});

	test("Machine bouton chocolait, pas assez de sous", () => {
		//ETANT DONNE une machine à café où on appuie sur le bouton chocolait
		const machine = new Machine();
		let nbCafeInit = machine.GetNombreCafésServis();
		let nbLaitInit = machine.GetDoseLait();
		let nbChocolatInit = machine.GetDoseChoco();
		let argentInit = machine.GetArgentEncaisse();
		machine.AppuiBoutonChocoLait();

		//QUAND on met 40cts
		machine.Insertion(0.4);

		//ALORS une boisson ne coule pas
		const nbCafeFinal = machine.GetNombreCafésServis();
		expect(nbCafeFinal).toBe(nbCafeInit);

		//ET une dose de lait ne coule pas
		const nbLaitFinal = machine.GetDoseLait();
		expect(nbLaitFinal).toBe(nbLaitInit);

		//ET une dose de chocolat ne coule pas
		const nbChocolatFinal = machine.GetDoseChoco();
		expect(nbChocolatFinal).toBe(nbChocolatInit);

		//ET l'argent n'est pas encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit);
	});
});
