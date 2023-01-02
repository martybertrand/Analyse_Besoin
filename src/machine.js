export default class Machine {

    constructor() {
        this.cafeServis = 0;
        this.argentEncaisse = 0;
        this.eauDisponible = true
        this.gobeletDisponible = true
        this.cafeEnStock = true
    }
    
    Insertion(montant) {
        if(montant >= 0.4 && this.eauDisponible && this.gobeletDisponible && this.cafeEnStock) {
            this.cafeServis ++
            this.argentEncaisse += montant
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
}