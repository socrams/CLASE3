export
public estaLogeado : boolean;
private usuarioLogeado: Usuario ;//| undefined
public nombreUsuario: String = "" ;
public puntaje1: number = 0;

const
this.usuarioLogeado = JSON.parse(localStorage.getItem("UsuarioPuntos")??"{}").find((us)=>us.usuario==this.obtenerNombreUsuario());
this.estaLogeado = ((this.usuarioLogeado?.nombre)??"")  != "";


getPuntaje1(){
    return this.usuarioLogeado.puntaje1;  
}

setPuntaje1(x:number){
    this.usuarioLogeado.puntaje1=x;
    localStorage.setItem("usuarioLogeado",JSON.stringify(this.usuarioLogeado));
}