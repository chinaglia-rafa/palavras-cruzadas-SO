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
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '?4',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '?1',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'E',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'M',
      '',
      '',
      '',
      '',
      '',
      '?3',
      '',
      '',
      '',
      'S',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'E',
      '',
      '',
      '',
      '',
      '',
      'P',
      '',
      '',
      '',
      'C',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'M',
      '',
      '',
      '',
      '',
      '',
      'E',
      '',
      '',
      '',
      'A',
    ],
    [
      '?0',
      'S',
      'I',
      'S',
      'T',
      'E',
      'M',
      'A',
      '-',
      'O',
      'P',
      'E',
      'R',
      'A',
      'C',
      'I',
      'O',
      'N',
      'A',
      'L',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'R',
      '',
      '',
      '',
      '',
      '',
      'I',
      '',
      '',
      '',
      'O',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'I',
      '',
      '',
      '',
      '',
      '',
      'F',
      '',
      '',
      '',
      'N',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'A',
      '',
      '',
      '',
      '',
      '',
      'E',
      '',
      '',
      '',
      'A',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '-',
      '',
      '',
      '',
      '',
      '',
      'R',
      '',
      '',
      '',
      'D',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'P',
      '',
      '',
      '',
      '',
      '',
      'I',
      '',
      '',
      '',
      'O',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '?2',
      'D',
      'R',
      'I',
      'V',
      'E',
      'R',
      '',
      'C',
      '',
      '',
      '',
      'R',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'I',
      '',
      '',
      '',
      '',
      '',
      'O',
      '',
      '',
      '',
      '',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'M',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'A',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'R',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'I',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'A',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
  ];

  dicas = [
    {
      id: '?0',
      text: 'Responsável por controlar não apenas as atividades, mas também os recursos da Cidade',
      quem: 'É um sistema que funciona controlando todos os prédios e estruturas da Cidade',
      como: 'Através da utilização dos prédios e estruturas limitadas da cidade',
      quando: 'Enquanto a Cidade está em funcionamento, desperta',
      onde: 'Na memória de todos os moradores que vivem e fazem a Cidade funcionar perfeitamente',
      porque:
        'Porque é preciso gerir os recursos da cidade, que não são infinitos, para o cuprimento de todas as atividades',
    } as Dica,
    {
      id: '?1',
      text: 'Componente cuja função é armazenar o Sistema Operacional, as atividades que serão executadas pela Cidade e os dados relacionados a ela enquanto a Cidade está em funcionamento, desperta',
      quem: 'Todos os moradores da cidade fazem uso desse componente através do Sistema Operacional que rege a Cidade',
      como: 'Armazenando cada comando e dado que compõe o Sistema Operacional e as atividades da Cidade, seus "programas"',
      quando: 'Enquanto a Cidade está em funcionamento, desperta',
      onde: 'Em um prédio da Cidade, que permite acesso aleatório para todos os moradores que precisam acessar algum dado',
      porque:
        'Acessar as informações dessa componente é mais rápido e eficiente durante o funcionamento da cidade do que procurar nos galpões de armazenamento, que são mais lentos e maiores',
    } as Dica,
    {
      id: '?2',
      text: 'É o nome dado ao elemento que faz a ligação entre dispositivos externos á Cidade e o núcleo de funcionamento dela',
      quem: 'São como pilotos especializados em fazer com que esses dispositivos externos acessem corretamente os recursos da Cidade, conforme necessidade',
      como: 'Traduzindo as instruções e comandos que a Cidade envia para os comandos específicos do elemento que está pilotando',
      quando:
        'A todo momento em que é preciso existir comunicação entre o núcleo da Cidade e um dispositivo externo à Cidade',
      onde: 'Enquanto a Cidade está em funcionamento, desperta, ele está armazenado na memória principal da Cidade',
      porque:
        'Cada tipo de dispositivo tem seu próprio funcionamento e comandos próprios, e é preciso um tradutor que transcreva esses comandos nas instruções que o Sistema Operacional da Cidade entende',
    } as Dica,
    {
      id: '?3',
      text: 'São dispositivos que não são nativos da Cidade, externos, mas que são usados para a entrada de novos dados na Cidade, ou para exibir as informações geradas pelas atividades executadas na Cidade',
      quem: 'Qualquer um que deseje interagir com a Cidade estando fora dela, em precisar conhecer seu funcionamento interno',
      como: 'Sendo ligado às entradas e saídas da Cidade, de forma que consiga se comunicar com ela usando um driver',
      quando:
        'Sempre que alguém de fora da Cidade deseja interagir com ela entrando com dados ou consultando as saídas de informações que ela gera',
      onde: 'Do lado de fora da Cidade, externo a ela',
      porque:
        'Muitas pessoas buscam a Cidade para encontrarem respostas para suas perguntas e precisam de uma forma de se comunicarem com ela sem entender seu funcionamento interno',
    } as Dica,
    {
      id: '?4',
      text: 'Parte do sistema que opera a Cidade que é responsável por indicar quais atividades serão feitas pelo núcleo da Cidade e por quanto tempo, de forma que uma única atividade não monopolize todo o núcleo da Cidade',
      quem: 'O próprio Sistema Operacional da Cidade o contém, para garantir que todas as atividades serão executadas no seu devido tempo',
      como: 'Particionando as atividades em pequenos fragmentos que serão alternados entre si para que surja a ilusão de que o núcleo da Cidade está executando diversas atividades ao mesmo tempo',
      quando:
        'Enquanto a Cidade está em funcionamento, desperta, e executando atividades',
      onde: 'Como uma das partes do Sistema Operacional da Cidade, uma construção responsável apenas por dividir essas atividades em partes menores',
      porque:
        'Os moradores do núcleo da Cidade não conseguem distinguir entre uma atividade e outra, e por isso é preciso que uma outra estrutura exista para dizer quais partes de cada atividade executar e em qual ordem',
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
      if (card === '') return;
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
          options[target].value = options[target].dataset.secret.toUpperCase();
          options[target].classList.add('correct');
          options[target].disabled = true;
        }
      }
      this.playerService.activeCard$.next('');
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
      'ç',
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
      '-',
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
        el.value = el.value.toUpperCase();
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
      this.activeCard = '';
      this.waitingForSelection = false;
    } else if (oneRight && this.activeCard === 'Rastrear') {
      const options = this.gridEl.nativeElement.querySelectorAll(
        '.letter-input:not(.correct)'
      );
      console.log('searching for', firstCorrect);
      for (const el of options) {
        if (el.dataset.secret.toLowerCase() !== firstCorrect.toLowerCase())
          continue;
        else {
          el.value = el.dataset.secret.toUpperCase();
          el.classList.add('correct');
          el.disabled = true;
        }
      }
      this.activeCard = '';
      this.waitingForSelection = false;
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
    this.playerService.gameOver();
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
