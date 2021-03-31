export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabContent = document.querySelectorAll('[data-tab="content"] section')

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove(section.dataset.anime)
    })
    tabContent[index].classList.add(tabContent[index].dataset.anime)
  }

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(tabContent[0].dataset.anime)

    tabMenu.forEach((img, index) => {
      img.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}
