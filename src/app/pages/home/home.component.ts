import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private player: PlayerService) {}

  ngOnInit(): void {}

  newGameClick(data: Event) {
    console.log(data);
  }

  continuar(): void {
    if (this.player.character.name != '')
      this.router.navigateByUrl('/stage-selector');
  }
}
