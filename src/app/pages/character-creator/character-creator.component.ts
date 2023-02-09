import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Card,
  deck,
  hunterDeck,
  mageDeck,
  warriorDeck,
} from 'src/app/models/card.model';
import { Character } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.scss'],
})
export class CharacterCreatorComponent implements OnInit {
  portraits = [
    'knight.jpeg',
    'mage.jpeg',
    'ranger.jpeg',
    'profile-picture.jpg',
    'portrait-1.jpg',
    'portrait-2.jpg',
    'portrait-3.jpg',
    'portrait-4.jpg',
    'portrait-5.jpg',
    'portrait-6.jpg',
    'portrait-7.jpg',
    'portrait-8.jpg',
    'portrait-9.jpg',
    'portrait-10.jpg',
    'portrait-11.jpg',
  ];

  currentPortrait = 0;

  character: Character = new Character();

  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit(): void {
    this.character.lives = Array(3);
    this.character.class = 'guerreiro';
    this.character.pronoums = 'ele/dele';
    this.character.profilePicture = this.portraits[0];
  }

  changePortrait(event: MouseEvent): void {
    if (event.offsetX > 186 / 2) this.nextPortrait();
    else this.previousPortrait();
    this.character.profilePicture = this.portraits[this.currentPortrait];
  }

  nextPortrait(): void {
    if (this.currentPortrait == this.portraits.length - 1)
      this.currentPortrait = 0;
    else this.currentPortrait += 1;
  }

  previousPortrait(): void {
    if (this.currentPortrait == 0)
      this.currentPortrait = this.portraits.length - 1;
    else this.currentPortrait -= 1;
  }

  continue(): void {
    console.log('Character is', this.character);
    if (this.character.class === 'guerreiro') this.character.lives = Array(4);
    else this.character.lives = Array(3);
    const hand: [Card | null, Card | null, Card | null] = [null, null, null];
    if (this.character.class === 'guerreiro')
      hand[2] = warriorDeck[Math.floor(Math.random() * warriorDeck.length)];
    else if (this.character.class === 'mago')
      hand[2] = mageDeck[Math.floor(Math.random() * mageDeck.length)];
    else if (this.character.class === 'caçador')
      hand[2] = hunterDeck[Math.floor(Math.random() * hunterDeck.length)];

    let a = 0;
    let b = 0;
    while (a == b) {
      a = Math.floor(Math.random() * deck.length);
      b = Math.floor(Math.random() * deck.length);
    }
    hand[0] = deck[a];
    hand[1] = deck[b];
    this.character.hand = hand;
    this.playerService.setCharacter(this.character);

    this.router.navigate(['/stage-selector']);
  }
}
