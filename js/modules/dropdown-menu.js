import clickOutside from './outside-click.js'

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)

    if(events === undefined) {
      this.events = ['click', 'touchstart']
    } else {
      this.events = events
    }

    this.activeClass = 'active'
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  }

  activeDropdownMenu(event) {
    event.preventDefault()
    const element = event.currentTarget
    element.classList.add(this.activeClass)
    clickOutside(element, this.events, () => {
      element.classList.remove(this.activeClass)
    })
  }

  addDropdownMenuEvent() {
    this.dropdownMenus.forEach(menu => {
      this.events.forEach(userEvent => {
        menu.addEventListener(userEvent, this.activeDropdownMenu)
      })
    })
  }

  init() {
    if(this.dropdownMenus.length) {
      this.addDropdownMenuEvent()
    }
    return this
  }
}
