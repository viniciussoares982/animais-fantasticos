export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros)
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass

    this.handleMutation = this.handleMutation.bind(this)
  }

  static incrementarNumero(numero) {
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
  }

  animaNumeros() {
    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero))
  }

  handleMutation(mutation) {
    if(mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect()
      this.animaNumeros()
    } else {
      console.log('false')
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation)
    this.observer.observe(this.observerTarget, { attributes: true })
  }

  init() {
    if(this.numeros.length && this.observerTarget) {
      this.addMutationObserver()
    }
    return this
  }
}
