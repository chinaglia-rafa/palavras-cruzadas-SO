import { Card } from './card.model';

export class Character {
  name: string;
  lives: number[];
  profilePicture: string;
  pronoums: string;
  class: string;
  stages: [boolean, boolean, boolean] = [false, false, false];
  hand: [Card | null, Card | null, Card | null] = [null, null, null];
}
