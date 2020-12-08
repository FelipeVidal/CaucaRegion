import { Component, Inject } from '@angular/core'
import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent{
  public lstMessages: string[];
  
  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    http.get<string[]>(baseUrl + "api/Eventoes").subscribe(result => { this.lstMessages = result }, error => console.error(error));
  }
}
interface Evento {
  EventosId: number;
  Nombre: string;
  Lugar: string;
  Entrada: number;
}
