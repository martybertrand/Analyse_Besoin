import Machine from "../src/machine";

describe("Allonge", () => {
	test("Machine bouton allonge, en stock, bien payé", () => {
		//ETANT DONNE une machine à café 
		const machine = new Machine();

		let nbCafeInit = machine.GetNombreCafésServis();
		let argentInit = machine.GetArgentEncaisse();

		//ET on appuie sur le bouton allonge
		machine.AppuiBoutonAllonge();

		//QUAND on met 40cts
		machine.Insertion(0.4);

		//ALORS une boisson coule
		const nbCafeFinal = machine.GetNombreCafésServis();
		expect(nbCafeFinal).toBe(nbCafeInit + 1);

		//ET 40cts est encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit + 0.4);
	});

	test("Machine bouton allonge, plus de café, bien payé", () => {
		//ETANT DONNE une machine à café 
		const machine = new Machine();
		machine.AyantDosesDeCafe(0);
		let nbCafeInit = machine.GetNombreCafésServis();
		let argentInit = machine.GetArgentEncaisse();

		//ET on appuie sur le bouton allonge qui n'a plus de café
		machine.AppuiBoutonAllonge();

		//QUAND on met 40cts
		machine.Insertion(0.4);

		//ALORS une boisson ne coule pas
		const nbCafeFinal = machine.GetNombreCafésServis();
		expect(nbCafeFinal).toBe(nbCafeInit);

		//ET l'argent n'est pas encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit);
	});

	test("Machine bouton allonge, plus d'eau, bien payé", () => {
		//ETANT DONNE une machine à café 
		const machine = new Machine();
		machine.CouperEau();
		let nbCafeInit = machine.GetNombreCafésServis();
		let argentInit = machine.GetArgentEncaisse();

		//ET on appuie sur le bouton allonge qui n'a plus d'eau
		machine.AppuiBoutonAllonge();

		//QUAND on met 40cts
		machine.Insertion(0.4);

		//ALORS une boisson ne coule pas
		const nbCafeFinal = machine.GetNombreCafésServis();
		expect(nbCafeFinal).toBe(nbCafeInit);

		//ET l'argent n'est pas encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit);
	});

	test("Machine bouton allonge, pas assez de sous", () => {
		//ETANT DONNE une machine à café
		const machine = new Machine();
		let nbCafeInit = machine.GetNombreCafésServis();
		let argentInit = machine.GetArgentEncaisse();

		//ET on appuie sur le bouton allonge
		machine.AppuiBoutonAllonge();

		//QUAND on met 39cts
		machine.Insertion(0.39);

		//ALORS une boisson ne coule pas
		const nbCafeFinal = machine.GetNombreCafésServis();
		expect(nbCafeFinal).toBe(nbCafeInit);

		//ET l'argent n'est pas encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit);
	});
});
