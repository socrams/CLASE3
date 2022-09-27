import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/mensaje/mensaje';
import { StorageService } from 'src/app/helper/storage.service';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.css']
})
export class BienvenidosComponent implements OnInit 
{
  public usuario:String|null = "";

  //-
  public textoMensaje: string = "";
  public coleccion: Array<Mensaje> = new Array<Mensaje>();
  //
  constructor(){  
    //connect php with pdo ?
include_once("server.inc");
$connect = new PDO('mysql:host='.$servername.'; dbname='.$db.';charset=utf8' , $username, $password); 

function table($connect)
{
    $sql="select * FROM d1" ;
    $result = $connect->query($sql) ; 
    foreach ($result as $rows ) 
    {
        echo  $rows["Course_name"] . "<br/>" ;
    }
}
//echo  table() ;
// Thanks barmar, missed the param before editing!
table($connect); // there's no need to echo the function as it does not return any value, 
                 // the function does the echoing




   }  

  ngOnInit(): void { 
    
   }

}
