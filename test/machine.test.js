import Machine from "../src/machine";

describe('Machine à café', () => {
    test('ETANT DONNE une machine QUAND on met 40 cts ALORS un café coule ET l\'argent est encaissé', () => {
        //ETANT DONNE une machine
        const machine = new Machine()
        const prixCafe = 0.4
        let nbCafeInit = machine.GetNombreCafésServis()
        let argentInit = machine.GetArgentEncaisse()

        //QUAND on met 40cts
        machine.Insertion(prixCafe)

        //ALORS le café coule
        const nbCafeFinal = machine.GetNombreCafésServis()
        expect(nbCafeFinal).toBe(nbCafeInit + 1)

        //ET l'argent est encaissé
        const argentFinal = machine.GetArgentEncaisse()
        expect(argentFinal).toBe(argentInit + prixCafe)
        
    });

    test('ETANT DONNE une machine QUAND on met moins de 40 cts ALORS aucun café ne coule ET l\'argent est rendu', () => {
        //ETANT DONNE une machine
        const machine = new Machine()
        const prixCafeInsuffisant = 0.39
        let nbCafeInit = machine.GetNombreCafésServis()
        let argentInit = machine.GetArgentEncaisse()

        //QUAND on met moins de 40cts
        machine.Insertion(prixCafeInsuffisant)

        //ALORS aucun café ne coule
        const nbCafeFinal = machine.GetNombreCafésServis()
        expect(nbCafeFinal).toBe(nbCafeInit)

        //ET l'argent est rendu
        const argentFinal = machine.GetArgentEncaisse()
        expect(argentFinal).toBe(argentInit)
        
    });
});