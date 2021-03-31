import clickOutside from './outside-click.js'

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]')

  function handleClick(e) {
    e.preventDefault()
    this.classList.add('active')
    clickOutside(this, ['click', 'touchstart'], () => {
      this.classList.remove('active')
    })
  }

  dropdownMenus.forEach(menu => {
    ['click', 'touchstart'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick)
    })
  })
}
