export class Noticia {
    id?:number;
    title?: string;
    image?: string;

    Noticia(id?:number, title?:string, image?:string){
        this.id = id;
        this.title = title;
        this.image = image;
    }
}
