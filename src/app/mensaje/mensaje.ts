export class Mensaje {
    fecha:Date;
    usuario:string;
    texto:string;

    constructor() {
        this.fecha = new Date();
        this.texto ="";
        this.usuario="no seteado";

    }

}
