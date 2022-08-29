export default class Modal {
constructor(botaoAbrir, botaoFechar, containerModal) {
  this. botaoAbrir = document.querySelector(botaoAbrir);
  this. botaoFechar = document.querySelector(botaoFechar);
  this. containerModal = document.querySelector(containerModal);

  //bind this ao callback para
  // fazer referência ao objeto
  // da Classe.
this.eventToggleModal = this.eventToggleModal.bind(this);
this.clickForaModal = this.eventToggleModal.bind(this);
}

// abre ou fecha o modal
 toggleModal() {
   this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
  this.toggleModal();
  }

  // fecha o Modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }


init() {
  if (this.botaoAbrir && botaoFechar && containerModal) {
    this.addModalEvents();
  }
  return this;
  }
}
