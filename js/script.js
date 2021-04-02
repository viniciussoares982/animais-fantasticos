import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import ScrollAnima from './modules/scroll-anima.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init()

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init()

const toolTip = new Tooltip('[data-tooltip]')
toolTip.init()

initDropdownMenu()
initMenuMobile()
initFuncionamento()

fetchAnimais('../../animaisapi.json', '.numeros-grid')
fetchBitcoin('https://blockchain.info/ticker', '.btc-price')

const scrollAnima = new ScrollAnima('[data-anime="scroll"]')
scrollAnima.init()
