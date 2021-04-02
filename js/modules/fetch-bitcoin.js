export default function fetchBitcoin(url, target) {
  function bitcoinBRL(btcPrice) {
    const btcHtmlPrice = document.querySelector(target)
    const btcPriceBRL = btcPrice.sell

    const btcReal = (1000 / btcPriceBRL).toFixed(4)
    btcHtmlPrice.innerText = btcReal
  }

  async function fetchBTC() {
    try {
      const responseBitcoin = await fetch(url)
      const bitcoinJSON = await responseBitcoin.json()

      bitcoinBRL(bitcoinJSON.BRL)
    }catch(err) {
      console.log(Error(err))
    }
  }

  fetchBTC()
}
