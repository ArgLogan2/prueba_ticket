import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  suma:any = 0;
  datos:any;
  
  constructor(private http:HttpClient) {}

  getDatos():Observable<any>{
    return this.http.get("./assets/tickets.json");
  }



  calcular():any{
    this.suma = 0;
    console.log("en calcular",this.datos);
    for(let x of this.datos.tickets){
      if(x.comprobante == "A"){
        this.suma = this.suma + x.monto
      }
    }
    return this.suma;
  }
 
  
}
