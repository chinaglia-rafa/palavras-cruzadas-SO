import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dialogue, Message } from 'src/app/models/dialogue.model';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-stage-selector',
  templateUrl: './stage-selector.component.html',
  styleUrls: ['./stage-selector.component.scss'],
})
export class StageSelectorComponent implements OnInit {
  constructor(public player: PlayerService, private router: Router) {}

  isInDialog = false;
  dialoguePage = 0;
  dialogue: Dialogue;

  ngOnInit(): void {
    this.dialogue = new Dialogue();
    this.dialogue.message.push(
      new Message(
        'Guia',
        'guide.png',
        false,
        'Viajante do Portal, você chegou ao fim de sua jornada.'
      )
    );
    this.dialogue.message.push(
      new Message(
        this.player.character.name,
        this.player.character.profilePicture,
        true,
        'Sim! E levarei comigo todos os registros e anotações que pesquisei durante minha jornada.'
      )
    );
    this.dialogue.message.push(
      new Message(
        'Guia',
        'guide.png',
        false,
        'Nossa Cidade está contente de poder compartilhar nossos conhecimentos com o seu povo. Até a próxima!'
      )
    );
    this.dialogue.message.push(
      new Message(
        this.player.character.name,
        this.player.character.profilePicture,
        true,
        'Obrigado, guia. Adeus.'
      )
    );
  }

  ngAfterViewInit(): void {
    if (!this.player.character.stages.includes(false)) {
      console.log('YOU WIN');
      this.isInDialog = true;
    }
  }

  nextMessage(): void {
    if (this.dialoguePage >= this.dialogue.message.length - 1) {
      this.isInDialog = false;
      this.router.navigate(['/']);
    } else this.dialoguePage++;
  }
}
