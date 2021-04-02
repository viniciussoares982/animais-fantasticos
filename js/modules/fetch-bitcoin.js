export default function initfetchBitcoin() {
  console.log('TESTE')
  function bitcoinBRL(btcPrice) {
    const btcHtmlPrice = document.querySelector('.btc-price')
    const btcPriceBRL = btcPrice.sell

    const btcReal = (1000 / btcPriceBRL).toFixed(4)
    btcHtmlPrice.innerText = btcReal
  }

  async function fetchBTC() {
    try {
      const responseBitcoin = await fetch('https://blockchain.info/ticker')
      const bitcoinJSON = await responseBitcoin.json()
      bitcoinBRL(bitcoinJSON.BRL)
    }catch(err) {
      console.log(Error(err))
    }
  }

  fetchBTC()
}
