export default class Modal {
  constructor(open, close, container) {
    this.openButton = document.querySelector(open)
    this.closeButton = document.querySelector(close)
    this.container = document.querySelector(container)
    // bind this ao Callback para fazer referência ao obj da classe

    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.outClickModal = this.outClickModal.bind(this)
  }

  toggleModal() {
    this.container.classList.toggle('ativo')
  }

  eventToggleModal(event) {
    event.preventDefault()
    this.toggleModal()
  }

  outClickModal(event) {
    if(event.target === this.container) {
      this.toggleModal()
    }
  }

  addModalEvents() {
    this.openButton.addEventListener('click', this.eventToggleModal)
    this.closeButton.addEventListener('click', this.eventToggleModal)
    this.container.addEventListener('click', this.outClickModal)
  }

  init() {
    if(this.openButton && this.closeButton && this.container) {
      this.addModalEvents()
    }
    return this
  }
}
