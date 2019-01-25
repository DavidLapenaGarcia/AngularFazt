//esto seria un controlador
import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';

@Component({
  //  selector: 'app-reservation-entry', esto es el nombre del tag
  selector   : 'app-reservation-entry',
  templateUrl: './reservation-entry.component.html',
  styleUrls  : ['./reservation-entry.component.css']
})
export class ReservationEntryComponent implements OnInit {

  reservation: Reservation;

  constructor() { }

  //un metodo que se usa cuando se inicia la clase
  ngOnInit() {
    //siempre el this delante
    this.reservation = new Reservation(0, "", "", "", "", new Date(), "1400");
  }

  reservationEntry():void{
    alert("reservationEntry works");
    
  }

}
