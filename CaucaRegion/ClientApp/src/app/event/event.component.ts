import { Component, Inject } from '@angular/core'
import { EventService } from '../service/event.service';
import { IEvent } from '../Interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
    public lstMessages: Observable<IEvent[]>;

    constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string, protected eventService: EventService) {
        this.GetInfo();
    }

    public GetInfo() {
        this.lstMessages = this.eventService.GetEvent();
        
    }
    public PostInfo() {
       // this.eventService.PostEvent(123,"Evento_10","Tunja",10);
    }
    public DeleteInfo(id) {
      this.eventService.DeleteEvent(id);
      this.reloadPage();
    }
    private reloadPage() {
      window.location.assign('/event');

    }
}

