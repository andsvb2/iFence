export default class Pulseira {
  id;
  nome;

  constructor(nome) {
    this.id = Date.now();
    this.nome = nome;
  }
}
