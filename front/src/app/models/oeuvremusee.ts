export class OeuvreMusee {
    oeuvre: String;
    artiste: String;
    idMusee: String;
    nomMusee: String;
    ville: String;
    siteWeb: String;

    constructor(oeuv: String, art: String, id: String, nom: String, vil: String, site: String) {
        this.oeuvre = oeuv;
        this.artiste = art;
        this.idMusee = id;
        this.nomMusee = nom;
        this.ville = vil;
        this.siteWeb = site; 
    }
    
}