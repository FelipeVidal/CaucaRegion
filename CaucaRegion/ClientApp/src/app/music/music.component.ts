import { Component, Inject } from '@angular/core'
import { MusicService } from '../service/music.service';
import { Observable } from 'rxjs';
import { IMusic } from '../Interfaces';



@Component({
  selector: 'music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent{
  public lstMessages: Observable<IMusic[]>;

  constructor(protected musicService: MusicService) {
    this.GetInfo();
  }

  public GetInfo() {
    this.lstMessages = this.musicService.GetMusic();
  }

  public DeleteInfo(id) {
    this.musicService.DeleteMusic(parseInt(id));
    this.reloadPage();
  }
  private reloadPage() {
    window.location.assign('/music');

  }
}
