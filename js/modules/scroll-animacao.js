export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')

  let windowHeight
  let windowPercent

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowPercent
      if(sectionTop < 0) {
        section.classList.add('ativo')
      } else if(section.classList.contains('ativo')) {
        section.classList.remove('ativo')
      }
    })
  }
  if(sections.length) {
    windowHeight = window.innerHeight
    windowPercent = (windowHeight * 70) / 100

    animaScroll()

    window.addEventListener('scroll', animaScroll)
  }
}
