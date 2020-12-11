import { Component, Inject, OnInit } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { ActivatedRoute } from "@angular/router"
import { IEvent } from '../Interfaces'
import { FormControl } from '@angular/forms'
import { EventService } from '../service/event.service';

@Component({
  selector: 'eventEdit',
  templateUrl: './eventEdit.component.html',
  styleUrls: ['./eventEdit.component.css']
})
export class EventEditComponent {
  public lstMessages: IEvent;
  public id: any;
  private nombreControl = new FormControl('');
  private lugarControl = new FormControl('');
  private entradaControl = new FormControl('');
    


  constructor(private http: HttpClient, @Inject("BASE_URL") private baseUrl: string, private ruta: ActivatedRoute, protected eventService: EventService, private route: ActivatedRoute,
     ) {
    
  }

  ngOnInit(): void {
    this.id = JSON.parse(this.ruta.snapshot.params.id)
    this.http.get<IEvent>(this.baseUrl + "api/Eventos/" + this.id).subscribe(result => { this.lstMessages = result }, error => console.error(error));
    
  }
  public guardar() {
    const newId = parseInt(this.id);
    const newNombre = this.nombreControl.value;
    const newLugar = this.lugarControl.value;
    const newEntrada = parseInt(this.entradaControl.value);
    this.eventService.UpdateEvent(newId, newNombre, newLugar, newEntrada);
    this.reloadPage();
  }
  public GetEvent() {

  }

  private reloadPage() {
    window.location.assign('/event');
    
  }
}

