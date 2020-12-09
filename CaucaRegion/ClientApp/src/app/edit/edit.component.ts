import { Component, Inject } from '@angular/core'
import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  public lstMessages: string[];

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    http.get<string[]>(baseUrl + "api/Eventos").subscribe(result => { this.lstMessages = result }, error => console.error(error));
  }
}
interface Evento {
  EventosId: number;
  Nombre: string;
  Lugar: string;
  Entrada: number;
}
