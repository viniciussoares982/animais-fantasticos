export default function initModal() {
  const openButton = document.querySelector('[data-modal="abrir"]')
  const closeButton = document.querySelector('[data-modal="fechar"]')
  const container = document.querySelector('[data-modal="container"]')

  function toggleModal(e) {
    e.preventDefault()
    container.classList.toggle('ativo')
  }

  function outClickModal(e) {
    if(e.target === this) {
      toggleModal(e)
    }
  }

  if(openButton && closeButton && container) {
    openButton.addEventListener('click', toggleModal)
    closeButton.addEventListener('click', toggleModal)
    container.addEventListener('click', outClickModal)
  }
}
