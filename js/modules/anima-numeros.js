export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]')

    numeros.forEach(numero => {
      const total = +numero.innerHTML
      const incremento = Math.floor(total / 100)
      let start = 0
      const timer = setInterval(() => {
        start += incremento
        numero.innerText = start
        if(start > total) {
          numero.innerHTML = total
          clearInterval(timer)
        }
      }, 50 * Math.random())
    })
  }

  let observer
  function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('ativo')) {
      observer.disconnect()
      animaNumeros()
    }
  }
  observer = new MutationObserver(handleMutation)
  const observerTarget = document.querySelector('.numeros')
  observer.observe(observerTarget, { attributes: true })
}
