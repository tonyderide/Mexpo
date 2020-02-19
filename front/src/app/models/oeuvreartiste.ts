export class OeuvreArtiste {
    oeuvre: String;
    artiste: String;
    idMusee: String;

    constructor(oeuv: String, art: String, id: String) {
        this.oeuvre = oeuv;
        this.artiste = art;
        this.idMusee = id;
    }
    
}