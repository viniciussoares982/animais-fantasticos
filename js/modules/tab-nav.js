export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu)
    this.tabContent = document.querySelectorAll(content)
    this.activeClass = 'ativo'
  }

  // ativa a tab de acordo com o index da mesma
  activeTab(index) {
    const direcao = this.tabContent[index].dataset.anime

    this.tabContent.forEach((section) => {
      section.classList.remove(section.dataset.anime)
    })
    this.tabContent[index].classList.add(this.activeClass, direcao)
  }

  // adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((img, index) => {
      img.addEventListener('click', () => this.activeTab(index))
    })
  }

  init() {
    if(this.tabMenu.length && this.tabContent.length) {
      // ativando o primeiro item
      this.activeTab(0)
      this.addTabNavEvent()
    }
    return this
  }
}
