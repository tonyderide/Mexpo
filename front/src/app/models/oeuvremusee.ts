export class OeuvreMusee {
    oeuvre: string;
    artiste: string;
    idMusee: string;
    nomMusee: string;
    ville: string;
    siteWeb: string;

    constructor(oeuv: string, art: string, id: string, nom: string, vil: string, site: string) {
        this.oeuvre = oeuv;
        this.artiste = art;
        this.idMusee = id;
        this.nomMusee = nom;
        this.ville = vil;
        this.siteWeb = site; 
    }
    
}