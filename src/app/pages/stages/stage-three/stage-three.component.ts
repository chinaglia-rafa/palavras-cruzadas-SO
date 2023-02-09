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
  selector: 'app-stage-three',
  templateUrl: './stage-three.component.html',
  styleUrls: ['./stage-three.component.scss'],
})
export class StageThreeComponent implements OnInit {
  dialogue: Dialogue;

  activeCard: string;

  isInDialog = true;
  dialoguePage = 0;

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
      '',
    ],
    [
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
      '?2',
      'G',
      'E',
      'R',
      'E',
      'N',
      'T',
      'E',
      '-',
      'D',
      'E',
      '-',
      'M',
      'E',
      'M',
      'O',
      'R',
      'I',
      'A',
      '',
    ],
    [
      '',
      '',
      'U',
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
      'L',
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
      '?0',
      'S',
      'I',
      'S',
      'T',
      'E',
      'M',
      'A',
      '-',
      'D',
      'E',
      '-',
      'A',
      'R',
      'Q',
      'U',
      'I',
      'V',
      'O',
      'S',
      '',
    ],
    [
      '',
      '',
      'T',
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
      'P',
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
      '?3',
      'P',
      'R',
      'O',
      'C',
      'E',
      'D',
      'I',
      'M',
      'E',
      'N',
      'T',
      'O',
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
      'S',
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
      'O',
      '',
      '',
      '',
      '',
      '',
      '',
      '?5',
      'I',
      'N',
      'T',
      'E',
      'R',
      'R',
      'U',
      'P',
      'Ç',
      'A',
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
      '',
    ],
  ];

  dicas = [
    {
      id: '?0',
      text: 'É a parte do Sistema Operacional que fica repsonsável por gerenciar os registros e dados armazenados na Cidade enquanto ela não está em funcionamento, dormindo',
      quem: 'O Sistema Operacional, em uma de suas responsabilidades',
      como: 'Através da divisão da memória secundária em partições e blocos para melhor gerenciamento',
      quando: 'Ao ler e escrever dados na memória secundária da Cidade',
      onde: 'Dentro do Sistema Operacional da Cidade, como um de seus serviços',
      porque: 'Para manter o controle dos arquivos e registros da Cidade',
    } as Dica,
    {
      id: '?1',
      text: 'É como se chama o escalonador de processos da Cidade, por ele dividir justamente os processos a serem executados pela Cidade',
      quem: 'O escalonador de processos da Cidade, que é repsonsável por segmentar diversos processos em partes menores para serem executadas',
      como: 'Dividindo cada processo de forma justa e IGUAL',
      quando:
        'Ao segmentar (escalonar) os processos do Sistema Operacional durante o funcionamento da Cidade',
      onde: 'Dentro do Sistema Operacional, trabalhando em conjunto com a memória primária da Cidade',
      porque:
        'Para que todos os processos tenham tempos iguais e justos de uso do núcleo do Sistema Operacional da Cidade',
    } as Dica,
    {
      id: '?2',
      text: 'Responsável por controlar a memória principal da Cidade durante o seu funcionamento, controlando seus espaços e acesso',
      quem: 'É mais um dos serviços do Sistema Operacional da Cidade, cumprindo o papel de controle da memória principal',
      como: 'Através de processos de alocação e reciclagem de espaços da memória para uso do Sistema Operacional e seus processos',
      quando:
        'Ao existir a necessidade de escrita ou leitura da memória principal',
      onde: 'Dentro do Sistema Operacional da Cidade, mas intimamente ligado à memória principal, a quem controla',
      porque:
        'Para que haja ordem no uso da memória principal, bem como a liberação de espaços disponíveis para processos utilizarem',
    } as Dica,
    {
      id: '?3',
      text: 'É um conjunto de comandos ou instruções feitos para serem facilmente acessados e repetidos. São parte dos códigos que permeiam as atividades da Cidade',
      quem: 'Os chamados programas, ou atividades, que a Cidade executa, fazem chamadas para esse tipo de elemento',
      como: 'Através das chamadas de procedimentos',
      quando: 'Ao precisar acessar repetidas vezes um conjunto de comandos',
      onde: 'Na memória principal, onde fica armazenado durante o funcionamento da Cidade',
      porque:
        'Para facilitar a organização e repetição rápida de atividades importantes',
    } as Dica,
    {
      id: '?4',
      text: 'É uma operação feita pelos moradores responsáveis pelo despertar da Cidade, sendo os primeiros a despertar todos os prédios, construções e demais moradores, testando cada componente do sistema para confirmar seu funcionamento',
      quem: 'Os moradores que despertam a Cidade e a colocam para funcionar',
      como: 'Através de um teste programado para cada componente que compõe a Cidade e seus sistemas',
      quando: 'Ao despertar a Cidade, quando seu funcionamento inicia',
      onde: 'Na Cidade, antes do Sistema Operacional entrar em ação para gerenciar as atividades do dia',
      porque:
        'Para garantir que cada prédio e construção está funcionamento de acordo',
    } as Dica,
    {
      id: '?5',
      text: 'A técnica usada pelos moradores para requisitar um recurso do núcleo do Sistema Operacional da Cidade, fazendo-o parar seu processo atual e responder à requisição',
      quem: 'O próprio Sistema Operacional pode fazer isso, ou um dos programas de usuário, por exemplo',
      como: 'Enviando um sinal específico ao núcleo da Cidade, que reagirá de acordo e oferecerá o serviço requisitado',
      quando: 'Ao necessitar de atenção por parte do núcleo da Cidade',
      onde: 'No núcleod o Sistema Operacional da Cidade',
      porque:
        'Para organizar a forma com que processos pedem acesso e ações específicas ao núcleo da Cidade',
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
        'Guia',
        'guide.png',
        false,
        'Viajante do Portal, vejo que está se tornando um especialista em nossa Cidade.'
      )
    );
    this.dialogue.message.push(
      new Message(
        this.playerService.character.name,
        this.playerService.character.profilePicture,
        true,
        'Obrigado, guia! Não tem sido uma tarefa fácil.'
      )
    );
    this.dialogue.message.push(
      new Message(
        'Guia',
        'guide.png',
        false,
        'Você parece um pouco incomodado. O que está em sua mente?'
      )
    );
    this.dialogue.message.push(
      new Message(
        this.playerService.character.name,
        this.playerService.character.profilePicture,
        true,
        'Estou me aproximando cada vez mais do núcleo da sua Cidade, mas ainda existem diversos mecanismos que não entendo. ' +
          'Como as suas divindades, que moram fora da Cidade, conseguem explicar as atividades que eles precisam que sua Cidade ' +
          'execute?'
      )
    );
    this.dialogue.message.push(
      new Message(
        'Guia',
        'guide.png',
        false,
        'As divindades que regem a nossa Cidade possuem um idioma próprio para se comunicarem conosco, e nosso morador do núcleo é ' +
          'treinado e especializado em traduzir esse idioma em instruções que todos nós possamos entender.'
      )
    );
    this.dialogue.message.push(
      new Message(
        'Guia',
        'guide.png',
        false,
        'É uma linguagem perfeitamente e lindamente lógica.'
      )
    );
    this.dialogue.message.push(
      new Message(
        this.playerService.character.name,
        this.playerService.character.profilePicture,
        true,
        'Interessante. Interessante... Espero conseguir pesqusiar a fundo o funcionamento dessa comunicação.'
      )
    );
    this.dialogue.message.push(
      new Message(
        this.playerService.character.name,
        this.playerService.character.profilePicture,
        true,
        'Bom, chegou a hora de eu ir para o passo final de minha jornada. Se eu conseguir chegar ao final deste desafio, poderei retornar ' +
          'pelo Portal?'
      )
    );
    this.dialogue.message.push(
      new Message(
        'Guia',
        'guide.png',
        false,
        'De fato. Se sua pesquisa for verdadeira e feita com esmero, você poderá voltar pelo Portal e partilhar seus novos conhecimentos ' +
          'com todos os outros que vivem do seu lado do Portal. Caso contrário...'
      )
    );
    this.dialogue.message.push(
      new Message(
        this.playerService.character.name,
        this.playerService.character.profilePicture,
        true,
        'Não quero nem pensar!'
      )
    );
    this.dialogue.message.push(
      new Message(
        this.playerService.character.name,
        this.playerService.character.profilePicture,
        true,
        'Chegou a hora! Vamos lá'
      )
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
      this.playerService.completeStage(2);
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

  nextMessage(): void {
    if (this.dialoguePage >= this.dialogue.message.length - 1) {
      this.isInDialog = false;
      setTimeout(() => {
        this.gridEl.nativeElement.querySelector('#ipt-5-1').focus();
      }, 200);
    } else this.dialoguePage++;
  }
}
