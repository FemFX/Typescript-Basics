class Person {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
  sayHello(name: string) {
    return `Hello ${name}`;
  }
}
class Animal {
  protected voice: string = '';
  public color: string = 'Black';
  private go() {
    console.log('go');
  }
}
class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice('Meow');
console.log(cat.color);
