export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]')

  const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)

  const todayDate = new Date()
  const nowDay = todayDate.getDay()
  const nowHours = todayDate.getHours()

  const weekOpen = diasSemana.indexOf(nowDay) !== -1
  const hoursOpen = (nowHours >= horarioSemana[0] && nowHours < horarioSemana[1])

  if(weekOpen && hoursOpen) {
    funcionamento.classList.add('aberto')
  }
}
