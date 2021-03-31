export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]')

  const onMouseMove = {
    handleEvent(e) {
      this.toolTipBox.style.top = `${e.pageY + 10}px`
      this.toolTipBox.style.left = `${e.pageX + 10}px`
    },
  }

  const onMouseLeave = {
    handleEvent() {
      this.toolTipBox.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave)
      this.element.removeEventListener('mousemove', onMouseMove)
    },
  }

  function criarTooltip(element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)
    return tooltipBox
  }

  function onMouseOver() {
    const toolTipBox = criarTooltip(this)

    onMouseMove.toolTipBox = toolTipBox
    this.addEventListener('mousemove', onMouseMove)

    onMouseLeave.toolTipBox = toolTipBox
    onMouseLeave.element = this
    this.addEventListener('mouseleave', onMouseLeave)
  }

  tooltips.forEach(item => {
    item.addEventListener('mouseover', onMouseOver)
  })
}
