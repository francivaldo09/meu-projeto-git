const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")

function convertvalues() {
    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert") // valor da moeda
    const currencyvalueconverted = document.querySelector(".currency-value") // outras moedas

    
    const dolartoday = 5.2
    const eurotoday = 6.2

    if(currencyselect.value == "dolar"){
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "usd"
        }).format(inputcurrencyvalue / dolartoday)
    }

    if(currencyselect.value == "euro"){
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"

        }).format(inputcurrencyvalue/eurotoday)
    }

    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-br", {
       style: "currency",
       currency: "brl"
    }).format(inputcurrencyvalue)
}

   function changecurrency() {
   const currencyname = document.getElementById("currency-name")
   const currencyimage = document.querySelector(".currency-img")

   if (currencyselect.value == "dolar") {
    currencyname.innerHTML = "Dolar americano"
    currencyimage.src = "./assets/dolar.png"
   }

   if (currencyselect.value == "euro") {
    currencyname.innerHTML = "euro"
    currencyimage.src = "./assets/euro.png"

   }

   convertvalues()

   }

currencyselect.addEventListener("change", changecurrency)
convertbutton.addEventListener("click", convertvalues)