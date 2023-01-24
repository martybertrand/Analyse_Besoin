import Machine from "../src/machine";

describe("Cappuccino", () => {
	test("Machine bouton cappuccino, en stock, bien payé", () => {
		//ETANT DONNE une machine à café 
		const machine = new Machine();

		let nbCafeInit = machine.GetNombreCafésServis();
		let nbLaitInit = machine.GetDoseLait();
		let nbChocoInit = machine.GetDoseChoco();
		let argentInit = machine.GetArgentEncaisse();

        //ET on appuie sur le bouton cappuccino
		machine.AppuiBoutonCapuccino();

		//QUAND on met 50cts
		machine.Insertion(0.5);

		//ALORS un café coule
		const nbCafeFinal = machine.GetNombreCafésServis();
		expect(nbCafeFinal).toBe(nbCafeInit + 1);

		//ET une dose de lait coule
		const nbLaitFinal = machine.GetDoseLait();
		expect(nbLaitFinal).toBe(nbLaitInit - 1);

        //ET une dose de choco coule
		const nbChocoFinal = machine.GetDoseChoco();
		expect(nbChocoFinal).toBe(nbChocoInit - 1);

		//ET 50cts est encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit + 0.50);
	});

	test("Machine bouton cappuccino, plus de café, bien payé", () => {
		//ETANT DONNE une machine à café
		const machine = new Machine();

        //Sans café
		machine.SansCafe();

		let nbCafeInit = machine.GetNombreCafésServis();
		let nbChocoInit = machine.GetDoseChoco();
		let nbLaitInit = machine.GetDoseLait();
		let argentInit = machine.GetArgentEncaisse();

        //ET on appuie sur le bouton cappuccino
		machine.AppuiBoutonCapuccino();

		//QUAND on met 50cts
		machine.Insertion(0.50);

		//ALORS un café ne coule pas
		const nbCafeFinal = machine.GetNombreCafésServis();
		expect(nbCafeFinal).toBe(nbCafeInit);

		//ET une dose de lait ne coule pas
		const nbLaitFinal = machine.GetDoseLait();
		expect(nbLaitFinal).toBe(nbLaitInit);

        //ET une dose de choco ne coule pas
		const nbChocoFinal = machine.GetDoseChoco();
		expect(nbChocoFinal).toBe(nbChocoInit);

		//ET l'argent n'est pas encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit);
	});

	test("Machine bouton cappuccino, plus de lait, bien payé", () => {
		//ETANT DONNE une machine à café
		const machine = new Machine();

        //Qui n'a plus de lait
		machine.AyantXLait(0);

		let nbCafeInit = machine.GetNombreCafésServis();
		let nbChocoInit = machine.GetDoseChoco();
		let nbLaitInit = machine.GetDoseLait();
		let argentInit = machine.GetArgentEncaisse();

        //ET on appuie sur le bouton cappuccino
		machine.AppuiBoutonCapuccino();

		//QUAND on met 50cts
		machine.Insertion(0.5);

        //ALORS un café ne coule pas
        const nbCafeFinal = machine.GetNombreCafésServis();
        expect(nbCafeFinal).toBe(nbCafeInit);

        //ET une dose de lait ne coule pas
        const nbLaitFinal = machine.GetDoseLait();
        expect(nbLaitFinal).toBe(nbLaitInit);

        //ET une dose de choco ne coule pas
        const nbChocoFinal = machine.GetDoseChoco();
        expect(nbChocoFinal).toBe(nbChocoInit);

		//ET l'argent n'est pas encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit);
	});

    test("Machine bouton cappuccino, plus de choco, bien payé", () => {
		//ETANT DONNE une machine à café
		const machine = new Machine();

        //Sans choco
		machine.AyantXChoco(0);

		let nbCafeInit = machine.GetNombreCafésServis();
		let nbChocoInit = machine.GetDoseChoco();
		let nbLaitInit = machine.GetDoseLait();
		let argentInit = machine.GetArgentEncaisse();

        //ET on appuie sur le bouton cappuccino
		machine.AppuiBoutonCapuccino();

		//QUAND on met 50cts
		machine.Insertion(0.5);

        //ALORS un café ne coule pas
        const nbCafeFinal = machine.GetNombreCafésServis();
        expect(nbCafeFinal).toBe(nbCafeInit);

        //ET une dose de lait ne coule pas
        const nbLaitFinal = machine.GetDoseLait();
        expect(nbLaitFinal).toBe(nbLaitInit);

        //ET une dose de choco ne coule pas
        const nbChocoFinal = machine.GetDoseChoco();
        expect(nbChocoFinal).toBe(nbChocoInit);

		//ET l'argent n'est pas encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit);
	});

	test("Machine bouton cappuccino, pas assez de sous", () => {
		//ETANT DONNE une machine à café
		const machine = new Machine();

		let nbCafeInit = machine.GetNombreCafésServis();
		let nbLaitInit = machine.GetDoseLait();
		let nbChocoInit = machine.GetDoseChoco();
		let argentInit = machine.GetArgentEncaisse();

        //ET on appuie sur le bouton cappuccino
		machine.AppuiBoutonCapuccino();

		//QUAND on met 40cts
		machine.Insertion(0.4);

		//ALORS un café ne coule pas
		const nbCafeFinal = machine.GetNombreCafésServis();
		expect(nbCafeFinal).toBe(nbCafeInit);

		//ET une dose de lait ne coule pas
		const nbLaitFinal = machine.GetDoseLait();
		expect(nbLaitFinal).toBe(nbLaitInit);

        //ET une dose de choco ne coule pas
        const nbChocoFinal = machine.GetDoseChoco();
        expect(nbChocoFinal).toBe(nbChocoInit);

		//ET l'argent n'est pas encaissé
		const argentFinal = machine.GetArgentEncaisse();
		expect(argentFinal).toBe(argentInit);
	});
});
