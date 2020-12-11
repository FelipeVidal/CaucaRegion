import { Injectable, Inject } from '@angular/core';
import { IMusic } from '../Interfaces';
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
export class MusicService {

  baseUrl: string;

  constructor(@Inject("BASE_URL") baseUrl: string, private http: HttpClient) {
    this.baseUrl = baseUrl;
  }

  public GetMusic(): Observable<IMusic[]> {
    return this.http.get<IMusic[]>(this.baseUrl + "api/MusicaAgrupaciones");
  }

  public PostMusic(id, nombre, instrumentos, canal) {
    this.http.post<any>(this.baseUrl + "api/MusicaAgrupaciones", { 'musicaId': id, 'nombre': nombre, 'instrumentos': instrumentos, 'canal': canal }, httpOptions).subscribe(
      result => {
        console.log(result);
      },
      error => console.error(error));
  }
  public DeleteMusic(id) {
    this.http.delete<any>(this.baseUrl + "api/MusicaAgrupaciones/" + id).subscribe(
      result => {
        console.log(result)
      },
      error => console.error(error)
    );
  }
  public UpdateMusic(id, newNombre, newInstrumentos, newCanal) {
    this.http.put<any>(this.baseUrl + "api/MusicaAgrupaciones/" +id, { 'musicaId': id, 'nombre': newNombre, 'instrumentos': newInstrumentos, 'canal': newCanal }, httpOptions).subscribe(
      result => {
        console.log(result)
      },
      error => console.error(error)
    );
  }
}
