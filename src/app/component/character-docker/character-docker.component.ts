import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'character-docker',
  templateUrl: './character-docker.component.html',
  styleUrls: ['./character-docker.component.scss'],
})
export class CharacterDockerComponent implements OnInit {
  constructor(public playerService: PlayerService) {}

  ngOnInit(): void {}
}
