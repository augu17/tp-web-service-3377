export class Estadisticas {
    nombre?:string;
    imagen?:string;
    casos?: number;
    curados?: number;
    fallecidos?: number;

    Estadisticas(nombre?:string,imagen?:string, casos?: number, curados?: number, fallecidos?: number){
        this.nombre = nombre;
        this.imagen = imagen;
        this.casos = casos;
        this.curados = curados;
        this.fallecidos = fallecidos;
    }
}
