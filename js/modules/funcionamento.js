export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento)

    if(activeClass === undefined) {
      this.activeClass = 'aberto'
    } else {
      this.activeClass = activeClass
    }
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number)
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number)
  }

  dadosAgora() {
    this.todayDate = new Date()
    this.nowDay = this.todayDate.getDay()
    this.nowHours = this.todayDate.getUTCHours() - 3
  }

  estaAberto() {
    const weekOpen = this.diasSemana.indexOf(this.nowDay) !== -1
    const hoursOpen = (this.nowHours >= this.horarioSemana[0] && this.nowHours < this.horarioSemana[1])

    return weekOpen && hoursOpen
  }

  ativoAberto() {
    if(this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass)
    }
  }

  init() {
    if(this.funcionamento) {
      this.dadosFuncionamento()
      this.dadosAgora()
      this.ativoAberto()
    }
    return this
  }
}
