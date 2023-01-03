export default class Machine {
	constructor() {
		this.cafeServis = 0;
		this.argentEncaisse = 0;
		this.eauDisponible = true;
		this.gobeletDisponible = true;
		this.cafeEnStock = true;

		this.nbDoseCafe = 1;
		this.nbGobelet = 1;
		this.nbDoseLait = 1;
		this.nbDoseChoco = 1;

		this.bouttonSucreEtat = false;
		this.doseSucre = 1;

		this.bouton = 0;
	}

	Insertion(montant) {
		switch (this.bouton) {
			case 1:
				//allongé
				if (
					montant >= 0.4 &&
					this.eauDisponible &&
					this.gobeletDisponible &&
					this.cafeEnStock &&
					this.nbDoseCafe > 0 &&
					this.nbGobelet > 0 &&
					((this.doseSucre > 0 && this.bouttonSucreEtat) ||
						!this.bouttonSucreEtat)
				) {
					this.cafeServis++;
					this.argentEncaisse += montant;
					this.nbGobelet--;
					this.nbDoseCafe = this.nbDoseCafe - 2;

					if (this.bouttonSucreEtat && this.doseSucre > 0) {
						this.doseSucre--;
						this.bouttonSucreEtat = false;
					}
				}
			case 2:
				//latté
				if (
					montant >= 0.45 &&
					this.gobeletDisponible &&
					this.nbDoseLait > 0 &&
					this.nbGobelet > 0 &&
					this.nbDoseCafe > 0 &&
					((this.doseSucre > 0 && this.bouttonSucreEtat) ||
						!this.bouttonSucreEtat)
				) {
					this.cafeServis++;
					this.argentEncaisse += montant;
					this.nbGobelet--;
					this.nbDoseLait--;
					this.nbDoseCafe--;

					if (this.bouttonSucreEtat && this.doseSucre > 0) {
						this.doseSucre--;
						this.bouttonSucreEtat = false;
					}
				}

			case 3:
				//choco
				if (
					montant >= 0.4 &&
					this.eauDisponible &&
					this.gobeletDisponible &&
					this.nbDoseChoco > 0 &&
					this.nbGobelet > 0 &&
					((this.doseSucre > 0 && this.bouttonSucreEtat) ||
						!this.bouttonSucreEtat)
				) {
					this.cafeServis++;
					this.argentEncaisse += montant;
					this.nbGobelet--;
					this.nbDoseChoco--;
					this.nbDoseCafe--;

					if (this.bouttonSucreEtat && this.doseSucre > 0) {
						this.doseSucre--;
						this.bouttonSucreEtat = false;
					}
				}

			case 4:
				//choco-lait
				if (
					montant >= 0.45 &&
					this.gobeletDisponible &&
					this.nbDoseChoco > 0 &&
					this.nbDoseLait > 0 &&
					this.nbGobelet > 0 &&
					((this.doseSucre > 0 && this.bouttonSucreEtat) ||
						!this.bouttonSucreEtat)
				) {
					this.cafeServis++;
					this.argentEncaisse += montant;
					this.nbGobelet--;
					this.nbDoseChoco--;
					this.nbDoseLait--;

					if (this.bouttonSucreEtat && this.doseSucre > 0) {
						this.doseSucre--;
						this.bouttonSucreEtat = false;
					}
				}

			case 5:
				//capuccino
				if (
					montant >= 0.5 &&
					this.eauDisponible &&
					this.gobeletDisponible &&
					this.cafeEnStock &&
					this.nbDoseChoco > 0 &&
					this.nbDoseLait > 0 &&
					this.nbDoseCafe > 0 &&
					this.nbGobelet > 0 &&
					((this.doseSucre > 0 && this.bouttonSucreEtat) ||
						!this.bouttonSucreEtat)
				) {
					this.cafeServis++;
					this.argentEncaisse += montant;
					this.nbGobelet--;
					this.nbDoseCafe--;
					this.nbDoseChoco--;
					this.nbDoseLait--;

					if (this.bouttonSucreEtat && this.doseSucre > 0) {
						this.doseSucre--;
						this.bouttonSucreEtat = false;
					}
				}

			case 0:
				//café
				if (
					montant >= 0.4 &&
					this.eauDisponible &&
					this.gobeletDisponible &&
					this.cafeEnStock &&
					this.nbDoseCafe > 0 &&
					this.nbGobelet > 0 &&
					((this.doseSucre > 0 && this.bouttonSucreEtat) ||
						!this.bouttonSucreEtat)
				) {
					this.cafeServis++;
					this.argentEncaisse += montant;
					this.nbGobelet--;

					if (this.bouttonSucreEtat && this.doseSucre > 0) {
						this.doseSucre--;
						this.bouttonSucreEtat = false;
					}
				}
		}
		this.bouton = 0;
	}

	GetNombreCafésServis() {
		return this.cafeServis;
	}

	GetArgentEncaisse() {
		return this.argentEncaisse;
	}

	CouperEau() {
		this.eauDisponible = false;
	}

	GobeletVide() {
		this.gobeletDisponible = false;
	}

	CafeEpuise() {
		this.cafeEnStock = false;
	}

	SansGobelets() {
		return AyantXGobelet(0);
	}

	SansCafe() {
		return this.AyantDosesDeCafe(0);
	}

	AyantXGobelet(x) {
		this.nbGobelet = x;
	}

	AyantDosesDeCafe(y) {
		this.nbDoseCafe = y;
	}

	AyantZSucreEnStock(z) {
		this.doseSucre = z;
	}

	AyantXLait(x) {
		this.nbDoseLait = x;
	}

	AyantXChoco(x) {
		this.nbDoseChoco = x;
	}

	GetDoseSucre() {
		return this.doseSucre;
	}

	GetDoseLait() {
		return this.nbDoseLait;
	}

	GetDoseChoco() {
		return this.nbDoseChoco;
	}

	AppuiBouttonSucre() {
		this.bouttonSucreEtat = true;
	}

	AppuiBoutonAllonge() {
		this.bouton = 1;
	}

	AppuiBoutonLatte() {
		this.bouton = 2;
	}

	AppuiBoutonChoco() {
		this.bouton = 3;
	}

	AppuiBoutonChocoLait() {
		this.bouton = 4;
	}

	AppuiBoutonCapuccino() {
		this.bouton = 5;
	}
}
