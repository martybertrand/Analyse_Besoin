import Machine from "../src/machine";

describe('Pénuries', () => {
    test('ETANT DONNE une machine n\'ayant plus d\'eau QUAND on met 40 cts ALORS aucun café ne coule ET l\'argent est rendu', () => {
        //ETANT DONNE une machine n'ayant plus d'eau
        const machine = new Machine()
        machine.CouperEau()

        let nbCafeInit = machine.GetNombreCafésServis()
        let argentInit = machine.GetArgentEncaisse()

        //QUAND on met 40cts
        machine.Insertion(0.40)

        //ALORS aucun café ne coule
        const nbCafeFinal = machine.GetNombreCafésServis()
        expect(nbCafeFinal).toBe(nbCafeInit)

        //ET l'argent est rendu
        const argentFinal = machine.GetArgentEncaisse()
        expect(argentFinal).toBe(argentInit)
        
    });

    test('ETANT DONNE une machine n\'ayant pas de gobelet QUAND on met 40 cts ALORS aucun café ne coule ET l\'argent est rendu', () => {
        //ETANT DONNE une machine n'ayant pas de gobelet
        const machine = new Machine()
        machine.GobeletVide()

        let nbCafeInit = machine.GetNombreCafésServis()
        let argentInit = machine.GetArgentEncaisse()

        //QUAND on met 40cts
        machine.Insertion(0.40)

        //ALORS aucun café ne coule
        const nbCafeFinal = machine.GetNombreCafésServis()
        expect(nbCafeFinal).toBe(nbCafeInit)

        //ET l'argent est rendu
        const argentFinal = machine.GetArgentEncaisse()
        expect(argentFinal).toBe(argentInit)
        
    });

    test('ETANT DONNE une machine n\'ayant plus de café QUAND on met 40 cts ALORS aucun café ne coule ET l\'argent est rendu', () => {
        //ETANT DONNE une machine n'ayant plus de café
        const machine = new Machine()
        machine.CafeEpuise()

        let nbCafeInit = machine.GetNombreCafésServis()
        let argentInit = machine.GetArgentEncaisse()

        //QUAND on met 40cts
        machine.Insertion(0.40)

        //ALORS aucun café ne coule
        const nbCafeFinal = machine.GetNombreCafésServis()
        expect(nbCafeFinal).toBe(nbCafeInit)

        //ET l'argent est rendu
        const argentFinal = machine.GetArgentEncaisse()
        expect(argentFinal).toBe(argentInit)
        
    });
});