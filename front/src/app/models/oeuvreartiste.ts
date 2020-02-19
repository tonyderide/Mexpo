export class OeuvreArtiste {
    oeuvre: string;
    artiste: string;
    idMusee: string;

    constructor(oeuv: string, art: string, id: string) {
        this.oeuvre = oeuv;
        this.artiste = art;
        this.idMusee = id;
    }
    
}