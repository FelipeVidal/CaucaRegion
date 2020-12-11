import { Component, Inject, OnInit } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { ActivatedRoute } from "@angular/router"
import { IMusic } from '../Interfaces'
import { FormControl } from '@angular/forms'
import { MusicService } from '../service/music.service';

@Component({
  selector: 'musicEdit',
  templateUrl: './musicEdit.component.html',
  styleUrls: ['./musicEdit.component.css']
})
export class MusicEditComponent {
  public lstMessages: IMusic;
  public id: any;
  private nombreControl = new FormControl('');
  private instrumentosControl = new FormControl('');
  private canalControl = new FormControl('');
  private imagenControl = new FormControl('');


  constructor(protected musicService: MusicService, private ruta: ActivatedRoute) {
    this.id = JSON.parse(this.ruta.snapshot.params.id)
  }

  ngOnInit(): void {
   
  }
  public guardar() {
    const id = this.id;
    const newNombre = this.nombreControl.value;
    const newInstrumentos = this.instrumentosControl.value;
    const newCanal = this.canalControl.value;
    const newImagen = this.imagenControl.value;

    this.musicService.UpdateMusic(id, newNombre, newInstrumentos, newCanal, newImagen);
    this.reloadPage();
  }
  public GetEvent() {

  }

  private reloadPage() {
    window.location.assign('/music');

  }
}
