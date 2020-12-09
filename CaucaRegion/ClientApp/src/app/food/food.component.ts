import { Component, Inject } from '@angular/core'
import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

export class FoodComponent {
  public lstMessages: string[];

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    http.get<string[]> (baseUrl + "api/Platos").subscribe(result => { this.lstMessages = result }, error => console.error(error));
  }
}
