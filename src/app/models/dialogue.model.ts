export class Dialogue {
  message: Message[] = [];
}

export class Message {
  name: string;
  picture: string;
  isLeft: boolean;
  text: string;

  constructor(name: string, picture: string, isLeft: boolean, text: string) {
    this.name = name;
    this.picture = picture;
    this.isLeft = isLeft;
    this.text = text;
  }
}
