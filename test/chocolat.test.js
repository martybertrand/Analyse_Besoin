import Machine from "../src/machine";

describe("Choco", () => {
	test("Machine bouton choco, en stock, bien payé", () => {
		//ETANT DONNE une machine à café
		const machine = new Machine();

        let nbChocoInit = machine.GetDoseChoco()
		let argentInit = machine.GetArgentEncaisse();

		//ET on appuie sur le bouton choco
		machine.AppuiBoutonChoco();

		//QUAND on met 40cts
		machine.Insertion(0.40);

		//ET une dose de choco coule
		const nbChocoFinal = machine.GetDoseChoco();
		expect(nbChocoFinal).toBe(nbChocoInit - 1);

		//ET 40cts est encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit + 0.40);
	});

	test("Machine bouton choco, sans choco, bien payé", () => {
		//ETANT DONNE une machine à café
		const machine = new Machine();

		//Sans choco
		machine.AyantXChoco(0);

        let nbChocoInit = machine.GetDoseChoco();
		let argentInit = machine.GetArgentEncaisse();

		//ET on appuie sur le bouton choco 
		machine.AppuiBoutonChoco();

		//QUAND on met 40cts
		machine.Insertion(0.40);

		//ET une dose de choco ne coule pas
		const nbChocoFinal = machine.GetDoseChoco();
		expect(nbChocoFinal).toBe(nbChocoInit);

		//ET l'argent n'est pas encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit);
	});

	test("Machine bouton choco, pas assez de sous", () => {
		//ETANT DONNE une machine à café
		const machine = new Machine();
		let nbChocoInit = machine.GetDoseChoco();
		let argentInit = machine.GetArgentEncaisse();

		//ET on appuie sur le bouton choco
		machine.AppuiBoutonChoco();

		//QUAND on met 30cts
		machine.Insertion(0.3);

		//ET une dose de choco ne coule pas
		const nbChocoFinal = machine.GetDoseChoco();
		expect(nbChocoFinal).toBe(nbChocoInit);

		//ET l'argent n'est pas encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit);
	});
});
