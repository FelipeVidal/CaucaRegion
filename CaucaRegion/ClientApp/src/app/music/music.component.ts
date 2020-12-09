import { Component, Inject } from '@angular/core'
import { HttpClient } from "@angular/common/http"


@Component({
  selector: 'music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent{
  public lstMessages: string[];

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    http.get<string[]>(baseUrl + "api/MusicaAgrupaciones").subscribe(result => { this.lstMessages = result }, error => console.error(error));
  }
}
