import { Component, Inject } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { ActivatedRoute } from "@angular/router"
import { IEvent } from '../Interfaces'
import { FormControl } from '@angular/forms'
import { EventService } from '../service/event.service';


@Component({
  selector: 'eventCreate',
  templateUrl: './eventCreate.component.html',
  styleUrls: ['./eventCreate.component.css']
})
export class EventCreateComponent {
  public lstMessages: IEvent;
  public idControl =  new FormControl('');
  private nombreControl = new FormControl('');
  private lugarControl = new FormControl('');
  private entradaControl = new FormControl('');




  constructor(private http: HttpClient, @Inject("BASE_URL") private baseUrl: string, private ruta: ActivatedRoute, protected eventService: EventService) {
  }

  ngOnInit(): void {

  }
  public guardar() {
    const newId = parseInt(this.idControl.value);
    const newNombre = this.nombreControl.value;
    const newLugar = this.lugarControl.value;
    const newEntrada = parseInt(this.entradaControl.value);
    this.eventService.PostEvent(newId, newNombre, newLugar, newEntrada);
    this.reloadPage();
  }
  public GetEvent() {

  }

  private reloadPage() {
    window.location.assign('/event');
  }

}

