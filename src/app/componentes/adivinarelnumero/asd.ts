let nombreUsuarioLogeado = this.loginservice.getUsuarioLogeado();
      this.posicion= this.todosLosUsuarios.findIndex((t:any)=>t.usuario==nombreUsuarioLogeado);
      //console.log(this.posicion);
      this.todosLosUsuarios[this.posicion].puntaje1=this.todosLosUsuarios[this.posicion].puntaje1+5;
      //console.log(this.todosLosUsuarios);
      localStorage.setItem("Usuarios",JSON.stringify(this.todosLosUsuarios));



      this.todosLosUsuarios = JSON.parse(localStorage.getItem("Usuarios")??"[]");



      todosLosUsuarios:Array<Usuario>
      posicion :any ;