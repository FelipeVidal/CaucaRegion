import { Component, Inject, OnInit } from '@angular/core'
import { IMusic } from '../Interfaces'
import { FormControl } from '@angular/forms'
import { MusicService } from '../service/music.service';

@Component({
  selector: 'musicCreate',
  templateUrl: './musicCreate.component.html',
  styleUrls: ['./musicCreate.component.css']
})
export class MusicCreateComponent {
  public lstMessages: IMusic;
  public idControl = new FormControl('');
  private nombreControl = new FormControl('');
  private instrumentosControl = new FormControl('');
  private canalControl = new FormControl('');

  constructor(protected musicService: MusicService) {
  }

  ngOnInit(): void {

  }
  public guardar() {
    const newId = parseInt(this.idControl.value);
    const newNombre = this.nombreControl.value;
    const newInstrumentos = this.instrumentosControl.value;
    const newCanal = this.canalControl.value;

    console.log(newId);

    console.log(newNombre);

    console.log(newInstrumentos);

    console.log(newCanal);

    this.musicService.PostMusic(newId, newNombre, newInstrumentos, newCanal);
    this.reloadPage();
  }
  public GetEvent() {

  }

  private reloadPage() {
    window.location.assign('/music');

  }
}
