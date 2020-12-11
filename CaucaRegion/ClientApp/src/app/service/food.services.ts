import { Injectable, Inject } from '@angular/core';
import { IFood } from '../Interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})

export class FoodService {
  baseUrl: string;

  constructor(@Inject("BASE_URL") baseUrl: string, private http: HttpClient) {
    this.baseUrl = baseUrl;
  }

  public GetFoot(): Observable<IFood[]> {
    return this.http.get<IFood[]>(this.baseUrl + "api/Platos");
  }

  public PostFood(id, nombre, ingredientes, precio, imagen) {
    this.http.post<any>(this.baseUrl + "api/Platos", { 'platosId': id, 'nombre': nombre, 'ingredientes': ingredientes, 'precio': precio, 'imagen': imagen }, httpOptions).subscribe(
      result => {
        console.log(result);
      },
      error => console.error(error));
  }
  public DeleteFood(id) {
    this.http.delete<any>(this.baseUrl + "api/Platos/" + id).subscribe(
      result => {
        console.log(result)
      },
      error => console.error(error)
    );
  }
  public UpdateFood(id, newNombre, newIngredientes, newPrecio, newImagen) {
    this.http.put<any>(this.baseUrl + "api/Platos/" + id, { 'platosId': id, 'nombre': newNombre, 'ingredientes': newIngredientes, 'precio': newPrecio, 'imagen': newImagen }, httpOptions).subscribe(
      result => {
        console.log(result)
      },
      error => console.error(error)
    );
  }
}
