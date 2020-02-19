export class Ville {
    codeVille: string;
    codePostal : string;
    nomVille: string;

    constructor(code: string, codeP: string, nom: string) {
        this.codeVille = code;
        this.codePostal = codeP;
        this.nomVille = nom;
    }
}