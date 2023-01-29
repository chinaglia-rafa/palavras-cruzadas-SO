import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Dialogue, Message } from 'src/app/models/dialogue.model';
import { PlayerService } from 'src/app/services/player/player.service';

export interface Dica {
  id: string;
  text: string;
  quem: string;
  como: string;
  quando: string;
  onde: string;
  porque: string;
}

@Component({
  selector: 'app-stage-one',
  templateUrl: './stage-one.component.html',
  styleUrls: ['./stage-one.component.scss'],
})
export class StageOneComponent implements OnInit {
  dialogue: Dialogue;

  activeCard: string;

  @ViewChild('gridElement') gridEl: ElementRef;

  isHorizontal = false;

  grid = [
    ['', '?0', '', '', '', '', '', '?4', '', ''],
    ['', 'R', '', '?2', '', '', '', 'P', '', ''],
    ['', 'A', '', 'R', '', '', '', 'R', '', ''],
    ['?1', 'F', 'R', 'I', 'O', '', '', 'O', '', ''],
    ['', 'A', '', 'O', '', '', '', 'C', '', ''],
    ['', 'E', '', '', '', '', '', 'E', '', ''],
    ['?3', 'L', 'E', 'G', 'O', 'L', 'A', 'S', '', ''],
    ['', '', '', '', '', '', '', 'S', '', ''],
    ['', '', '', '', '', '', '', 'O', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ];

  dicas = [
    {
      id: '?0',
      text: 'Nome de um dos criadores deste jogo',
      quem: 'Texto QUEM para o ?0',
      como: 'Texto COMO para o ?0',
      quando: 'Texto QUANDO para o ?0',
      onde: 'Texto ONDE para o ?0',
      porque: 'Texto PORQUE para o ?0',
    } as Dica,
    {
      id: '?1',
      text: 'Ausência de calor',
      quem: 'Texto QUEM para o ?1',
      como: 'Texto COMO para o ?1',
      quando: 'Texto QUANDO para o ?1',
      onde: 'Texto ONDE para o ?1',
      porque: 'Texto PORQUE para o ?1',
    } as Dica,
    {
      id: '?2',
      text: "Corpo d'água doce corrente",
      quem: 'Texto QUEM para o ?2',
      como: 'Texto COMO para o ?2',
      quando: 'Texto QUANDO para o ?2',
      onde: 'Texto ONDE para o ?2',
      porque: 'Texto PORQUE para o ?2',
    } as Dica,
    {
      id: '?3',
      text: 'Arqueiro da Sociedade do Anel',
      quem: 'Texto QUEM para o ?3',
      como: 'Texto COMO para o ?3',
      quando: 'Texto QUANDO para o ?3',
      onde: 'Texto ONDE para o ?3',
      porque: 'Texto PORQUE para o ?3',
    } as Dica,
    {
      id: '?4',
      text: 'Nome que se dá ao conjunto de ações com um objetivo específico',
      quem: 'Texto QUEM para o ?4',
      como: 'Texto COMO para o ?4',
      quando: 'Texto QUANDO para o ?4',
      onde: 'Texto ONDE para o ?4',
      porque: 'Texto PORQUE para o ?4',
    } as Dica,
  ];

  selectedPosition: [number, number] = [1, 1];
  firstEditPosition: [number, number] = [-1, -1];

  editMode = false;

  waitingForSelection = false;

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

    this.playerService.activeCard$.subscribe((card: string) => {
      console.log('acting upon activation of', card);
      if (
        [
          'Por quê?',
          'Quem?',
          'Como?',
          'Quando?',
          'Onde?',
          'Grimório perdido',
        ].includes(card)
      ) {
        this.activeCard = card;
        this.waitingForSelection = true;
      } else if (card === 'Armadilha de espinhos') {
        const optitons = this.gridEl.nativeElement.querySelectorAll(
          '.letter-input:not(.correct)'
        );
        const target = Math.floor(Math.random() * (optitons.length - 1));
        console.log('Target is', optitons, target);
        optitons[target].classList.add('trapped');
      } else if (
        card === 'Trespassar' ||
        card === 'Resistência sobrenatural' ||
        card === 'Rastrear'
      ) {
        this.activeCard = card;
      } else if (card === 'Visão arcana') {
        for (let i = 0; i < 3; i++) {
          const options = this.gridEl.nativeElement.querySelectorAll(
            '.letter-input:not(.correct)'
          );
          const target = Math.floor(Math.random() * (options.length - 1));
          options[target].value = options[target].dataset.secret.toLowerCase();
          options[target].classList.add('correct');
          options[target].disabled = true;
        }
      }
    });
  }

  ngAfterViewInit(): void {
    console.log(this.gridEl.nativeElement.querySelector('#ipt-1-1').focus());
  }

  keydown(event: KeyboardEvent): void {
    if (event.key === 'Tab') event.preventDefault();
  }

  select(selected: string): void {
    if (!this.waitingForSelection) return;

    if (
      this.activeCard === 'Por quê?' ||
      this.activeCard === 'Grimório perdido'
    ) {
      this.dicas[selected[1]].text +=
        '. Por quê: ' + this.dicas[selected[1]].porque;
    }
    if (this.activeCard === 'Quem?' || this.activeCard === 'Grimório perdido') {
      this.dicas[selected[1]].text += '. Quem: ' + this.dicas[selected[1]].quem;
    }
    if (this.activeCard === 'Como?' || this.activeCard === 'Grimório perdido') {
      this.dicas[selected[1]].text += '. Como: ' + this.dicas[selected[1]].como;
    }
    if (
      this.activeCard === 'Quando?' ||
      this.activeCard === 'Grimório perdido'
    ) {
      this.dicas[selected[1]].text +=
        '. Quando: ' + this.dicas[selected[1]].quando;
    }
    if (this.activeCard === 'Onde?' || this.activeCard === 'Grimório perdido') {
      this.dicas[selected[1]].text += '. Onde: ' + this.dicas[selected[1]].onde;
    }
    this.waitingForSelection = false;
    this.activeCard = '';
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
    this.selectedPosition = [row, col];
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
  }

  confirmWords(): void {
    let error = false;
    let oneRight = false;
    let firstCorrect = '';
    const all = this.gridEl.nativeElement.querySelectorAll('.dirty');
    for (const el of all) {
      if (el.value.toLowerCase() == el.dataset.secret.toLowerCase()) {
        oneRight = true;
        firstCorrect = el.value.toLowerCase();
        el.classList.add('correct');
        el.disabled = true;
        if (el.classList.contains('trapped')) {
          this.playerService.heal();
          el.classList.remove('trapped');
        }
      } else {
        error = true;
        el.value = '';
        el.classList.add('error');
      }
    }

    if (
      oneRight &&
      (this.activeCard === 'Trespassar' ||
        this.activeCard === 'Resistência sobrenatural')
    ) {
      let count = 1;
      if (this.activeCard === 'Resistência sobrenatural')
        count = error
          ? this.playerService.character.lives.length - 1
          : this.playerService.character.lives.length;
      for (let i = 0; i < count; i++) {
        const options = this.gridEl.nativeElement.querySelectorAll(
          '.letter-input:not(.correct)'
        );
        const target = Math.floor(Math.random() * (options.length - 1));
        options[target].value = options[target].dataset.secret.toLowerCase();
        options[target].classList.add('correct');
        options[target].disabled = true;
      }
    } else if (oneRight && this.activeCard === 'Rastrear') {
      const options = this.gridEl.nativeElement.querySelectorAll(
        '.letter-input:not(.correct)'
      );
      console.log('searching for', firstCorrect);
      for (const el of options) {
        if (el.dataset.secret.toLowerCase() !== firstCorrect.toLowerCase())
          continue;
        else {
          el.value = el.dataset.secret.toLowerCase();
          el.classList.add('correct');
          el.disabled = true;
        }
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
      this.playerService.completeStage(0);
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
