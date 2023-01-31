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
  selector: 'app-stage-two',
  templateUrl: './stage-two.component.html',
  styleUrls: ['./stage-two.component.scss'],
})
export class StageTwoComponent implements OnInit {
  dialogue: Dialogue;

  activeCard: string;

  @ViewChild('gridElement') gridEl: ElementRef;

  isHorizontal = false;

  grid = [
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '?2', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '?1', '', '', 'C', '', '', '', ''],
    ['', '', '', '', '', '', '', '', 'C', '', '', 'H', '', '', '', ''],
    [
      '?0',
      'M',
      'U',
      'L',
      'T',
      'I',
      'P',
      'R',
      'O',
      'G',
      'R',
      'A',
      'M',
      'A',
      'D',
      'O',
    ],
    ['', '', '', '', '', '', '', '', 'N', '', '', 'M', '', '', '', ''],
    ['', '', '', '', '?3', 'P', 'A', 'R', 'T', 'I', 'Ç', 'A', 'O', '', '', ''],
    ['', '', '', '', '', '', '', '', 'E', '', '', 'D', '', '', '', ''],
    ['', '', '', '?4', 'M', 'U', 'T', 'E', 'X', '', '', 'A', '', '', '', ''],
    ['', '', '', '', '', '', '', '', 'T', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '?5', 'B', 'L', 'O', 'C', 'O', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ];

  dicas = [
    {
      id: '?0',
      text: 'É como se chama um sistema capaz de executar múltiplas tarefas "ao mesmo tempo", ou ter a aparência de fazê-lo',
      quem: 'O Sistema Operacional em si, é uma característica dele',
      como: 'Utilizando um escalonador de processos',
      quando:
        'Quando se deseja executar diversas atividades, ou processos, de forma alternada',
      onde: 'No núcleo do Sistema Operacional da Cidade, enquanto está em funcionamento',
      porque:
        'Para que a Cidade possa ter suas diversas atividades sendo executadas alternadamente, parecendo que são executadas ao mesmo tempo',
    } as Dica,
    {
      id: '?1',
      text: 'É como se chama o estado atual da memória principal que a Cidade possui num dado momento no tempo',
      quem: 'A memória principal é quem contém esse elemento a cada novo passo do funcionamento da Cidade',
      como: 'Armazenando cada dado necessário ao funcionamento da Cidade como um todo',
      quando:
        'A cada passo da execução do Sistema Operacional que rege a Cidade, conforme os processos entram e saem do núcleo do Sistema Operacional',
      onde: 'Dentro da memória principal',
      porque:
        'Para representar o estado da memória principal em um dado momento no tempo',
    } as Dica,
    {
      id: '?2',
      text: 'É a ação que os moradores que estão executando uma atividade da Cidade tomam quando é preciso acessar um serviço do Sistema Operacional',
      quem: 'Uma das atividades da Cidade, que também são chamadas de processos',
      como: 'Requerindo uma interrupção para o núcleo do Sistema Operacional',
      quando:
        'Quando é preciso acessar um serviço oferecido pelo Sistema Operacional da cidade',
      onde: 'No núcleo do Sistema Operacional',
      porque:
        'Para permitir que as atividades que não tem acesso total à Cidade acessem os serviços que seu Sistema Operacional oferece',
    } as Dica,
    {
      id: '?3',
      text: 'É o nome dado a uma das divisões que existem dentro da estrutura da Cidade responsável por armazenar todos os dados e o Sistema Operacional enquanto a Cidade e seus moradores não estão em funcionamento, dormindo',
      quem: 'É uma parte da memória secundária da Cidade, que armazena informações e processos enquanto a Cidade dorme',
      como: 'Através do uso do prédio responsável por gerenciar o armazenamento da Cidade, que divide esse armazenamento em partes menores, segmentos',
      quando:
        'Quando é preciso gerenciar diferentes sistemas de arquivos de armazenamento',
      onde: 'No armazenamento secundário da Cidade, onde ficam os registros de processos e o Sistema Operacional enquanto a Cidade dorme',
      porque: '',
    } as Dica,
    {
      id: '?4',
      text: 'Técnica que os moradores do núcleo da Cidade usam para impedir que mais de uma atividade sendo executada acesse o mesmo objeto na memória principal da Cidade',
      quem: 'O núcleo da Cidade, responsável por resguardar a memória principal de interferências e conflitos entre processos',
      como: 'Impedindo que processos acessem dados sendo acessados por outros processos no momento',
      quando:
        'Quando a Cidade está executando mais de um processo que querem acessar o mesmo objeto na memória principal',
      onde: 'No núcleo da Cidade',
      porque:
        'Para garantir a ordem durante a execução das atividades da cidade',
    } as Dica,
    {
      id: '?5',
      text: 'O nome dado a menor unidade de armazenamento do prédio da Cidade responsável por armazenar os dados e o Sistema Operacional da Cidade enquanto está inativa, dormindo',
      quem: 'É uma parte da memória secundária da Cidade',
      como: 'Através do uso do prédio responsável por gerenciar o armazenamento secundário da Cidade',
      quando:
        'Quando é preciso armazenar ou recuperar algum dado na memória secundária da Cidade',
      onde: 'No prédio de armazenamento secundário da Cidade',
      porque: 'Para manter a ordem dos dados sendo armazenados',
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
    // console.log(this.gridEl.nativeElement.querySelector('#ipt-5-1').focus());
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
