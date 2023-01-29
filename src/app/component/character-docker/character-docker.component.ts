import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'character-docker',
  templateUrl: './character-docker.component.html',
  styleUrls: ['./character-docker.component.scss'],
})
export class CharacterDockerComponent implements OnInit {
  cards: Card[] = [];

  constructor(public playerService: PlayerService) {}

  ngOnInit(): void {}

  activate(card: Card, index: number): void {
    if (!card) return;
    this.playerService.activate(card.name);
    this.playerService.character.hand[index] = null;
    this.playerService.persist();
  }
}
