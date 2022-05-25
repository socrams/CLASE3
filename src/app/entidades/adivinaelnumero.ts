export class Adivinaelnumero {
    public      valor:      number = 0;
    public      intentos:   number = 0;
    public      min:        number= 0;
    public      max:        number= 0;
    public      msj:        string="";
   


    constructor() 
    {
        
    }
    
    public jugar(){
        
        this.valor= Math.floor(Math.random() * (this.max-this.min))+this.min;
        //this.valor= Math.floor(Math.random()*10);
        this.min;
    }
}