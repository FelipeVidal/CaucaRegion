import { Component, Inject } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { FoodService } from '../service/food.services';
import { Observable } from 'rxjs';
import { IFood } from '../Interfaces';
@Component({
  selector: 'food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

export class FoodComponent {
  public lstMessages: Observable<IFood[]>;

  constructor(protected footService: FoodService) {
    this.GetInfo();
  }

  public GetInfo() {
    this.lstMessages = this.footService.GetFoot();
  }

  public DeleteInfo(id) {
    this.footService.DeleteFood(parseInt(id));
    this.reloadPage();
  }
  private reloadPage() {
    window.location.assign('/food');

  }
}
