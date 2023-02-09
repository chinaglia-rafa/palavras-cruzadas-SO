import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Character } from 'src/app/models/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  character: Character = new Character();

  activeCard$ = new BehaviorSubject<string>('');

  constructor(private router: Router) {
    const character = JSON.parse(localStorage.getItem('char'));
    this.character = character;
    if (!character) {
      this.character.class = 'mago';
      this.character.lives = Array(3);
      this.character.name = 'Sir Chinaglia';
      this.character.profilePicture = 'profile-picture.jpg';
      this.character.pronoums = 'ele/dele';

      this.persist();
    }
  }

  persist(): void {
    localStorage.setItem('char', JSON.stringify(this.character));
  }

  setCharacter(character: Character) {
    this.character = character;
    this.persist();
  }

  damage(): number {
    this.character.lives.pop();
    this.persist();
    return this.character.lives.length;
  }

  heal(): number {
    this.character.lives.push(...Array(1));
    this.persist();
    return this.character.lives.length;
  }

  completeStage(index: number): void {
    this.character.stages[index] = true;
    this.persist();
  }

  activate(card: string): void {
    if (
      [
        'Por quê?',
        'Quem?',
        'Como?',
        'Quando?',
        'Onde?',
        'Armadilha de espinhos',
        'Trespassar',
        'Resistência sobrenatural',
        'Grimório perdido',
        'Visão arcana',
        'Rastrear',
      ].includes(card)
    )
      this.activeCard$.next(card);
  }

  gameOver(): void {
    this.character = new Character();
    this.router.navigateByUrl('/home');
  }
}
