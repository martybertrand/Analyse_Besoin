import Machine from "../src/machine";

describe('Stocks', () => {
    test('ETANT DONNE une machine ayant un seul gobelet QUAND on met deux fois 40 cts ALORS seul un café coule ET l\'argent du second café est rendu', () => {
        //ETANT DONNE une machine
        const machine = new Machine()

        //Ayant un seul gobelet
        machine.AyantXGobelet(1)

        let nbCafeInit = machine.GetNombreCafésServis()
        let argentInit = machine.GetArgentEncaisse()
        const somme = 0.40

        //QUAND on met deux fois 40cts
        machine.Insertion(somme)
        machine.Insertion(somme)

        //ALORS seul un café coule
        const nbCafeFinal = machine.GetNombreCafésServis()
        expect(nbCafeFinal).toBe(nbCafeInit + 1)

        //ET l'argent du second  rendu
        const argentFinal = machine.GetArgentEncaisse()
        expect(argentFinal).toBe(argentInit + somme)
        
    });

    test('ETANT DONNE une machine ayant une seule dose de café QUAND on met deux fois 40 cts ALORS seul un café coule ET l\'argent du second café est rendu', () => {
        //ETANT DONNE une machine 
        const machine = new Machine()
        
        //Ayant une seule dose de café
        machine.AyantDosesDeCafe(1)

        let nbCafeInit = machine.GetNombreCafésServis()
        let argentInit = machine.GetArgentEncaisse()
        const somme = 0.40

        //QUAND on met deux fois 40cts
        machine.Insertion(somme)
        machine.Insertion(somme)

        //ALORS seul un café coule
        const nbCafeFinal = machine.GetNombreCafésServis()
        expect(nbCafeFinal).toBe(nbCafeInit + 1)

        //ET l'argent du second  rendu
        const argentFinal = machine.GetArgentEncaisse()
        expect(argentFinal).toBe(argentInit + somme)
        
    }); 
});