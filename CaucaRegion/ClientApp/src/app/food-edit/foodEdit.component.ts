import { Component, Inject, OnInit } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { ActivatedRoute } from "@angular/router"
import { IFood } from '../Interfaces'
import { FormControl } from '@angular/forms'
import { FoodService } from '../service/food.services';

@Component({
  selector: 'foodEdit',
  templateUrl: './foodEdit.component.html',
  styleUrls: ['./foodEdit.component.css']
})
export class FoodEditComponent {
  public lstMessages: IFood;
  public id: any;
  private nombreControl = new FormControl('');
  private ingredientesControl = new FormControl('');
  private precioControl = new FormControl('');
  private imagenControl = new FormControl('');



  constructor(private http: HttpClient, @Inject("BASE_URL") private baseUrl: string, private ruta: ActivatedRoute, protected foodService: FoodService, private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.id = JSON.parse(this.ruta.snapshot.params.id)
    this.http.get<IFood>(this.baseUrl + "api/Platos/" + this.id).subscribe(result => { this.lstMessages = result }, error => console.error(error));
    console.log(this.id);
  }
  public guardar() {
    const newId = parseInt(this.id);
    const newNombre = this.nombreControl.value;
    const newIngredientes = this.ingredientesControl.value;
    const newPrecio = parseInt(this.precioControl.value);
    const newImagen = this.imagenControl.value;

    this.foodService.UpdateFood(newId, newNombre, newIngredientes, newPrecio, newImagen);
    this.reloadPage();
  }
  public GetEvent() {

  }

  private reloadPage() {
    window.location.assign('/food');

  }
}
