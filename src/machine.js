export default class Machine {

    constructor() {
        this.cafeServis = 0
        this.argentEncaisse = 0
        this.eauDisponible = true
        this.gobeletDisponible = true
        this.cafeEnStock = true

        this.nbDoseCafe = 1
        this.nbGobelet = 1

        this.bouttonSucreEtat = false
        this.doseSucre = 1
    }
    
    Insertion(montant) {

        if( montant >= 0.4 &&
            this.eauDisponible &&
            this.gobeletDisponible &&
            this.cafeEnStock &&
            this.nbDoseCafe > 0 &&
            this.nbGobelet > 0 && ( (this.doseSucre > 0 && this.bouttonSucreEtat) || (!this.bouttonSucreEtat) )) {
                this.cafeServis ++
                this.argentEncaisse += montant
                this.nbGobelet --

                if(this.bouttonSucreEtat && this.doseSucre > 0){
                    this.doseSucre--
                    this.bouttonSucreEtat = false
                }
        } 

    }

    GetNombreCafésServis() {
        return this.cafeServis
    }

    GetArgentEncaisse() {
        return this.argentEncaisse
    }

    CouperEau() {
        this.eauDisponible = false
    }

    GobeletVide() {
        this.gobeletDisponible = false
    }

    CafeEpuise() {
        this.cafeEnStock = false
    }



    SansGobelets() {
        return AyantXGobelet(0)
    }

    SansCafe() {
        return this.AyantDosesDeCafe(0)
    }

    AyantXGobelet(x) {
        this.nbGobelet = x        
    }

    AyantDosesDeCafe(y) {
        this.nbDoseCafe = y
    }

    AyantZSucreEnStock(z) {
        this.doseSucre = z
    }

    GetDoseSucre() {
        return this.doseSucre
    }

    AppuiBouttonSucre() {
        this.bouttonSucreEtat = true
    }
}