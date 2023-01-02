import Machine from "../src/machine";

describe('Stocks', () => {
    test('ETANT DONNE une machine ayant un seul gobelet QUAND on met deux fois 40 cts ALORS seul un café coule ET l\'argent du second café est rendu', () => {
        //ETANT DONNE une machine ayant un seul gobelet
        const machine = new Machine()
        machine.CouperEau()

        let nbCafeInit = machine.GetNombreCafésServis()
        let argentInit = machine.GetArgentEncaisse()

        //QUAND on met deux fois 40cts
        machine.Insertion(0.40)

        //ALORS seul un café coule
        const nbCafeFinal = machine.GetNombreCafésServis()
        expect(nbCafeFinal).toBe(nbCafeInit)

        //ET l'argent du second est rendu
        const argentFinal = machine.GetArgentEncaisse()
        expect(argentFinal).toBe(argentInit)
        
    }); 
});