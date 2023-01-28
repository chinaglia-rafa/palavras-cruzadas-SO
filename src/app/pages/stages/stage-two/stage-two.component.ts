import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Dialogue, Message } from 'src/app/models/dialogue.model';
import { PlayerService } from 'src/app/services/player/player.service';

export interface Dica {
  id: string;
  text: string;
  alt: string;
}

@Component({
  selector: 'app-stage-two',
  templateUrl: './stage-two.component.html',
  styleUrls: ['./stage-two.component.scss'],
})
export class StageTwoComponent implements OnInit {
  dialogue: Dialogue;

  @ViewChild('gridElement') gridEl: ElementRef;

  isHorizontal = false;

  grid = [
    ['', '?0', '', '', '', '', '', '?4', '', '', ''],
    ['', 'R', '', '?2', '', '', '', 'P', '', '', ''],
    ['', 'A', '', 'R', '', '', '?5', 'R', 'A', 'T', 'O'],
    ['?1', 'F', 'R', 'I', 'O', '', '', 'O', '', '', ''],
    ['', 'A', '', 'O', '', '', '', 'C', '', '', ''],
    ['', 'E', '', '', '', '', '', 'E', '', '', ''],
    ['?3', 'L', 'E', 'G', 'O', 'L', 'A', 'S', '', '', ''],
    ['', '', '', '', '', '', '', 'S', '', '', ''],
    ['', '', '', '', '', '', '', 'O', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', ''],
  ];

  dicas = [
    {
      id: '?0',
      text: 'Nome de um dos criadores deste jogo',
      alt: 'Texto alternativo para o ?0',
    } as Dica,
    {
      id: '?1',
      text: 'Ausência de calor',
      alt: 'Texto alternativo para o ?1',
    } as Dica,
    {
      id: '?2',
      text: "Corpo d'água doce corrente",
      alt: 'Texto alternativo para o ?2',
    } as Dica,
    {
      id: '?3',
      text: 'Arqueiro da Sociedade do Anel',
      alt: 'Texto alternativo para o ?3',
    } as Dica,
    {
      id: '?4',
      text: 'Nome que se dá ao conjunto de ações com um objetivo específico',
      alt: 'Texto alternativo para o ?4',
    } as Dica,
    {
      id: '?5',
      text: 'Animal sapequinha que roeu a roupa do rei de roma',
      alt: 'Texto alternativo para o ?5',
    } as Dica,
  ];

  selectedPosition: [number, number] = [1, 1];
  firstEditPosition: [number, number] = [-1, -1];

  editMode = false;

  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit(): void {
    this.dialogue = new Dialogue();
    this.dialogue.message.push(
      new Message(
        'Chinaglia',
        'profile-picture.jpg',
        true,
        'Hello. Is anyone there?'
      )
    );
    this.dialogue.message.push(
      new Message('Guide', 'portrait-3.jpg', false, 'Hello. I can help you')
    );
  }

  ngAfterViewInit(): void {
    console.log(this.gridEl.nativeElement.querySelector('#ipt-1-1').focus());
  }

  keydown(event: KeyboardEvent): void {
    if (event.key === 'Tab') event.preventDefault();
  }

  next(row: number, col: number, event: KeyboardEvent): boolean {
    event.preventDefault();
    event.stopPropagation();
    const skipables = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
    ];

    let nextRow = row;
    let nextCol = col;

    if (event.key === 'Backspace') {
      let current = this.gridEl.nativeElement.querySelector(
        `#ipt-${row}-${col}`
      );
      console.log(current);
      if (this.isHorizontal) nextCol--;
      else nextRow--;
      let prev = this.gridEl.nativeElement.querySelector(
        `#ipt-${nextRow}-${nextCol}`
      );
      if (prev) {
        prev.value = '';
        prev.focus();
      }
      return false;
    }
    if (!skipables.includes(event.key.toLowerCase())) return false;
    // console.log(
    //   'anterior ',
    //   this.previousPosition[0] + '-' + this.previousPosition[1]
    // );

    console.log('É na horizontal?', this.isHorizontal);

    if (this.isHorizontal) nextCol++;
    else nextRow++;
    //   // console.log('Hora de ir para baixo para', row + 1, col);
    //   nextRow++;
    // else if (this.previousPosition[1] != col)
    //   // console.log('Hora de ir para a direita', row, col + 1);
    //   nextCol++;

    // console.log('Hora de ir para', nextRow, nextCol);
    let next = this.gridEl.nativeElement.querySelector(
      `#ipt-${nextRow}-${nextCol}`
    );
    // TODO: completar isso considerando a palavra inteira antes de validar
    if (next) next.focus();

    // this.previousPosition = [row, col];

    this.editMode = true;
    if (this.firstEditPosition[0] == -1 && this.firstEditPosition[1] == -1)
      this.firstEditPosition = [row, col];

    return true;
  }

  clear(): void {
    const dirty = this.gridEl.nativeElement.querySelectorAll(
      '.letter-input.dirty'
    );
    for (const el of dirty) {
      el.value = '';
    }
    this.editMode = false;
    if (this.firstEditPosition)
      this.gridEl.nativeElement
        .querySelector(
          `#ipt-${this.firstEditPosition[0]}-${this.firstEditPosition[1]}`
        )
        .focus();
    this.firstEditPosition = [-1, -1];
  }

  changeDirection(row: number, col: number): void {
    if (
      (!this.isHorizontal &&
        !this.grid[row][col + 1] &&
        !this.grid[row][col - 1]) ||
      (this.isHorizontal &&
        !this.grid[row + 1][col] &&
        !this.grid[row - 1][col])
    )
      return;
    this.isHorizontal = !this.isHorizontal;
    console.log(this.isHorizontal);
    this.selectedPosition = [row, col];
  }

  confirmWords(): void {
    let error = false;
    console.log('Confirm words');
    const all = this.gridEl.nativeElement.querySelectorAll('.dirty');
    for (const el of all) {
      if (el.value.toLowerCase() == el.dataset.secret.toLowerCase()) {
        el.classList.add('correct');
        el.disabled = true;
      } else {
        error = true;
        el.value = '';
        el.classList.add('error');
      }
    }

    if (error) this.damage();
    else this.checkWin();

    this.editMode = false;
  }

  checkWin() {
    const all = this.gridEl.nativeElement.querySelectorAll('.letter-input');
    let passed = true;
    for (const el of all) {
      if (!el.classList.contains('correct')) passed = false;
    }

    if (passed) {
      alert('VITORIA');
      this.playerService.completeStage(1);
      this.router.navigateByUrl('/stage-selector');
    } else console.log('ainda não');
  }

  damage() {
    this.gridEl.nativeElement.animate(
      [
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(-2deg)' },
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(2deg)' },
        { transform: 'rotate(0deg)' },
      ],
      {
        duration: 400,
        iterations: 1,
        easing: 'cubic-bezier(0.4,-0.24, 0.47, 1.32)',
      }
    );
    if (this.playerService.damage() === 0) this.gameOver();
  }

  gameOver() {
    alert('Você foi derrotado em sua jornada.');
  }

  quit(): void {
    const a = confirm(
      'Tem certeza que deseja sair? Todo o progresso desta fase será perdido e seus corações não serão curados!'
    );

    if (a) {
      this.router.navigateByUrl('/stage-selector');
    }
  }
}
