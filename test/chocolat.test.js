import Machine from "../src/machine";

describe("Choco", () => {
	test("Machine bouton choco, en stock, bien payé", () => {
		//ETANT DONNE une machine à café où on appuie sur le bouton choco
		const machine = new Machine();

        let nbChocoInit = machine.GetDoseChoco()
		let argentInit = machine.GetArgentEncaisse();
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

	test("Machine bouton choco, bien payé", () => {
		//ETANT DONNE une machine à café où on appuie sur le bouton choco qui n'a plus de choco
		const machine = new Machine();
		machine.AyantXChoco(0);

        let nbChocoInit = machine.GetDoseChoco();
		let argentInit = machine.GetArgentEncaisse();
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
		//ETANT DONNE une machine à café où on appuie sur le bouton choco
		const machine = new Machine();
		let nbChocoInit = machine.GetDoseChoco();
		let argentInit = machine.GetArgentEncaisse();
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
