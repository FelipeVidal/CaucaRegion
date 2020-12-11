import { Component, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public lstMessages: string[];

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    http.get<string[]>(baseUrl + "api/Eventos/").subscribe(result => { this.lstMessages = result }, error => console.error(error));
  }
}
