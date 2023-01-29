import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent implements OnInit {
  @Input('card') cardData: Card;

  constructor() {}

  ngOnInit(): void {}
}
