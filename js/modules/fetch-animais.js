import AnimaNumeros from './anima-numeros.js'

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target)
  // Cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div')
    div.classList.add('numero-animal')
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`

    return div
  }

  // preenche cada animal no DOM
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal)
    numerosGrid.appendChild(divAnimal)
  }

  // anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNum = new AnimaNumeros('[data-numero]', '.numeros', 'ativo')
    animaNum.init()
  }

  // puxa os animais atraves de uma Api (arquivo JSON)
  // cria cada animal ultilizando create animal.
  async function criarAnimais() {
    try {
      // Fetch, espera resposta e transforma em JSON
      const animaisResponse = await fetch(url)
      const animaisJSON = await animaisResponse.json()

      // aplica os dados em uma div criada por createAnimal() fazendo um loop por cada "animal"
      animaisJSON.forEach(animal => preencherAnimais(animal))

      animaAnimaisNumeros()
    } catch (err) {
      console.log(Error(err))
    }
  }

  return criarAnimais()

  // fetchAnimais('./animaisapi.json')
}
