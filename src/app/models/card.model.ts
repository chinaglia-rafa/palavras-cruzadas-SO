export class Card {
  name: string;
  image: string;
  type: string;
  effect: string;
  flavour: string;

  constructor(
    name: string,
    image: string,
    type: string,
    effect: string,
    flavour: string
  ) {
    this.name = name;
    this.image = image;
    this.type = type;
    this.effect = effect;
    this.flavour = flavour;
  }
}

const track = new Card(
  'Rastrear',
  'eye.png',
  'Habilidade - caçador',
  'Escolha uma letra e rastreie sua posição em todas as palavras.',
  '"A tecnologia, tão artificial quanto pareça, é apenas natureza muito bem organizada."'
);
const why = new Card(
  'Por quê?',
  'light.png',
  'Habilidade - questão',
  'Escolha uma dica e revele mais informações sobre ela.',
  '"Qual é o seu propósito aqui, afinal de contas?"'
);

const who = new Card(
  'Quem?',
  'who.png',
  'Habilidade - questão',
  'Escolha uma dica e revele mais informações sobre ela.',
  '"Eu entendo o que está acontecendo, mas quem é o responsável?"'
);

const how = new Card(
  'Como?',
  'how.png',
  'Habilidade - questão',
  'Escolha uma dica e revele mais informações sobre ela.',
  '"O funcionamento dessa cidade é fascinante, mal posso esperar para saber mais..."'
);

const when = new Card(
  'Quando?',
  'when.png',
  'Habilidade - questão',
  'Escolha uma dica e revele mais informações sobre ela.',
  '"Tudo tem seu lugar nessa cidade. É só uma questão de tempo até descobrimos quando cada parte de seu processo entra em ação."'
);

const where = new Card(
  'Onde?',
  'where.png',
  'Habilidade - questão',
  'Escolha uma dica e revele mais informações sobre ela.',
  '"Onde você está, onde você está? Vamos lá, venha para a luz."'
);

const trap = new Card(
  'Armadilha de espinhos',
  'vines.png',
  'Habilidade - caçador',
  'Acerte a letra marcada e recupere um ♥.',
  '"A caçada rendeu uma refeição nutritiva e revigorante."'
);

const sword = new Card(
  'Trespassar',
  'sword.png',
  'Habilidade - guerreiro',
  'Se você acertar pelo menos uma letra, acerte uma outra letra aleatória.',
  '"Um acerto bem dado vale por dois, dizia o sábio."'
);

const riposte = new Card(
  'Resistência sobrenatural',
  'shield.png',
  'Habilidade - guerreiro',
  'Mesmo errando um palpite, descubra uma letra para cada ♥ que você tem restante.',
  '"Os segredos dessa cidade serão revelados, com pesquisa e tempo!"'
);

const grimoire = new Card(
  'Grimório perdido',
  'book.png',
  'Habilidade - mago',
  'Revele todas as dicas de uma palavra.',
  '"Espadas e flechas são úteis, mas só o conhecimento nos levará de volta para casa."'
);

const arcaneSight = new Card(
  'Visão arcana',
  'sight.png',
  'Habilidade - mago',
  'Acerte três letras aleatórias.',
  '"A verdade ainda não está completa, mas basta encontrar as pistas certas e nossa pesquisa renderá as respostas que buscamos."'
);

export const deck = [who, how, when, why, where];
export const hunterDeck = [track, trap];
export const warriorDeck = [sword, riposte];
export const mageDeck = [grimoire, arcaneSight];
