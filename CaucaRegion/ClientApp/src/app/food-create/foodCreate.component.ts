import { Component, Inject, OnInit } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { ActivatedRoute } from "@angular/router"
import { IFood } from '../Interfaces'
import { FormControl } from '@angular/forms'
import { FoodService } from '../service/food.services';

@Component({
  selector: 'footEdit',
  templateUrl: './foodCreate.component.html',
  styleUrls: ['./foodCreate.component.css']
})
export class FoodCreateComponent {
  public lstMessages: IFood;
  public idControl= new FormControl('');
  private nombreControl = new FormControl('');
  private ingredientesControl = new FormControl('');
  private precioControl = new FormControl('');
  private imagenControl = new FormControl('');

  constructor(private http: HttpClient, @Inject("BASE_URL") private baseUrl: string, private ruta: ActivatedRoute, protected foodService: FoodService, private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
 
  }
  public guardar() {
    const newId = parseInt(this.idControl.value);
    const newNombre = this.nombreControl.value;
    const newIngredientes = this.ingredientesControl.value;
    const newPrecio = parseInt(this.precioControl.value);
    const newImagen = this.imagenControl.value;

    this.foodService.PostFood(newId, newNombre, newIngredientes, newPrecio, newImagen );
    this.reloadPage();
  }
  public GetEvent() {

  }

  private reloadPage() {
    window.location.assign('/food');

  }
}
