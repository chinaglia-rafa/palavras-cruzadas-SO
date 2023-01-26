import { Injectable } from '@angular/core';
import { Character } from 'src/app/models/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  character: Character = new Character();

  constructor() {
    this.character.class = 'mago';
    this.character.lives = Array(3);
    this.character.name = 'Sir Chinaglia';
    this.character.profilePicture = 'profile-picture.jpg';
    this.character.pronoums = 'ele/dele';
  }
}
