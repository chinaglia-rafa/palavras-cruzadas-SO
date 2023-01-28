import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-stage-selector',
  templateUrl: './stage-selector.component.html',
  styleUrls: ['./stage-selector.component.scss'],
})
export class StageSelectorComponent implements OnInit {
  constructor(public player: PlayerService) {}

  ngOnInit(): void {}
}
