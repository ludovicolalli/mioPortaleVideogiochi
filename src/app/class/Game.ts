export class Game {
    id: number;
    Nome: string;
    Descrizione: string;
    Genere: string;
    Rating: number;
    AnnoUscita: Date;

    constructor (id: number, Nome: string, Descrizione?: string, Genere?: string, Rating?: number, AnnoUscita?: Date){
        this.id = id;
        this.Nome = Nome;
        this.Descrizione = Descrizione;
        this.Genere = Genere;
        this.Rating = Rating;
        this.AnnoUscita = AnnoUscita;
    }

    getId(){
        return this.id;
    }

    setId(value: number){
        this.id = value;
    }

    getNome(){
        return this.Nome;
    }

    setNome(value: string){
        this.Nome = value;
    }

    getDescrizione(){
        return this.Descrizione;
    }

    setDescrizione(value: string){
        this.Descrizione = value;
    }

    getGenere(){
        return this.Genere;
    }

    setGenere(value: string){
        this.Genere = value;
    }

    getRating(){
        return this.Rating;
    }

    setRating(value: number){
        this.Rating = value;
    }

    getAnnoUscita(){
        return this.AnnoUscita;
    }

    setAnnoUscita(value: Date){
        this.AnnoUscita = value;
    }
}