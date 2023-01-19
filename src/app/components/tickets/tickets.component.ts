import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  totalA:any;
  datos:any;
  suma:Number = 0;

  constructor(private leodatos:DatosService) { }

  ngOnInit(): void {
    this.leodatos.getDatos().subscribe(data=>{
     this.leodatos.datos = data
     this.leodatos.calcular()
    });   

  }

  calcular(){
    this.suma = 0;
    this.suma = this.leodatos.calcular()
  }



}
