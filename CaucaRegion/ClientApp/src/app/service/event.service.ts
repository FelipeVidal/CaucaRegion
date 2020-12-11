import { Injectable, Inject } from '@angular/core';
import { IEvent } from '../Interfaces';
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

export class EventService {
  baseUrl: string;

  constructor(@Inject("BASE_URL") baseUrl: string, private http: HttpClient) {
    this.baseUrl = baseUrl;
  }

  public GetEvent(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.baseUrl + "api/Eventos");
  }

  public PostEvent(id, nombre, lugar, entrada, imagen) {
    this.http.post<any>(this.baseUrl + "api/Eventos", { 'eventosId': id, 'nombre': nombre, 'lugar': lugar, 'entrada': entrada, 'imagen': imagen }, httpOptions).subscribe(
      result => {
        console.log(result);
      },
      error => console.error(error));
  }
  public DeleteEvent(id) {
    this.http.delete<any>(this.baseUrl + "api/Eventos/" + id).subscribe(
      result => {
        console.log(result)
      },
      error => console.error(error)
    );
  }
  public UpdateEvent(id, newNombre, newLugar, newEntrada, newImagen) {
    this.http.put<any>(this.baseUrl + "api/Eventos/" + id, { 'eventosId': id, 'nombre': newNombre, 'lugar': newLugar, 'entrada': newEntrada, 'imagen': newImagen}, httpOptions).subscribe(
      result => {
        console.log(result)
      },
      error => console.error(error)
    );
  }

}
