import Machine from "../src/machine";

describe('Dose de sucre', () => {
    test('ETANT DONNE une machine à cafe ET un appui sur le bouton sucre QUAND on met 40 cts ALORS un café coule ET une dose de sucre est consommée', () => {
        //ETANT DONNE une machine à cafe
        const machine = new Machine()
        machine.AyantXGobelet(1)

        let nbCafeInit = machine.GetNombreCafésServis()
        let doseSucreInit = machine.GetDoseSucre()

        const somme = 0.40

        //ET un appui sur le bouton sucre
        machine.AppuiBouttonSucre()

        //QUAND on met 40cts
        machine.Insertion(somme)

        //ALORS un café coule
        const nbCafeFinal = machine.GetNombreCafésServis()
        expect(nbCafeFinal).toBe(nbCafeInit + 1)

        //ET une dose de sucre est consommée
        const doseSucreFinal = machine.GetDoseSucre()
        expect(doseSucreFinal).toBe(doseSucreInit - 1)
        
    });

    test('ETANT DONNE une machine à cafe n\'ayant plus de sucre ET un appui sur le bouton sucre QUAND on met 40 cts ALORS aucun café ne coule ET aucune dose de sucre n\'est consommée ET l\'argent est rendu', () => {
        //ETANT DONNE une machine à cafe n'ayant plus du sucre
        const machine = new Machine()
        machine.AyantZSucreEnStock(0)

        let nbCafeInit = machine.GetNombreCafésServis()
        let argentInit = machine.GetArgentEncaisse()
        let doseSucreInit = machine.GetDoseSucre()

        const somme = 0.40

        //ET un appui sur le bouton sucre
        machine.AppuiBouttonSucre()

        //QUAND on met 40cts
        machine.Insertion(somme)

        //ALORS aucun café ne coule
        const nbCafeFinal = machine.GetNombreCafésServis()
        expect(nbCafeFinal).toBe(nbCafeInit)

        //ET aucune dose de sucre n'est consommée
        const doseSucreFinal = machine.GetDoseSucre()
        expect(doseSucreFinal).toBe(doseSucreInit )

        //ET l'argent est rendu
        const argentFinal = machine.GetArgentEncaisse()
        expect(argentFinal).toBe(argentInit)
        
    });
});