export class Menu{
    id: number;
    Descrizione: string;
    Selezionato: boolean;

    constructor(id: number, Descrizione: string, Selezionato: boolean){
        this.id = id;
        this.Descrizione = Descrizione;
        this.Selezionato = Selezionato;
    }

    getId(){
        return this.id;
    }

    setId(value: number){
        this.id = value;
    }

    getDescrizione(){
        return this.Descrizione;
    }

    setDescrizione(value: string){
        this.Descrizione = value;
    }

    getSelezionato(){
        return this.Selezionato;
    }

    setSelezionato(value: boolean){
        this.Selezionato = value;
    }
}