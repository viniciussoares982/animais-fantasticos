export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.windowHeight = window.innerHeight
    this.windowPercent = (this.windowHeight * 70) / 100

    this.animaScroll = this.animaScroll.bind(this)
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - this.windowPercent
      if(sectionTop < 0) {
        section.classList.add('ativo')
      } else if(section.classList.contains('ativo')) {
        section.classList.remove('ativo')
      }
    })
  }

  init() {
    if(this.sections.length) {
      this.animaScroll()
      window.addEventListener('scroll', this.animaScroll)
    }
    return this
  }
}
