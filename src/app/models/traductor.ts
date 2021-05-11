export class Traductor {
    text ?: string;
    to ?: string;
    from ?: string;
    text2 ?: string;

    Traductor(text: string, to: string, from: string, text2: string){
        this.text = text;
        this.to = to;
        this.from = from;
        this.text2 = text2;
    }
}
