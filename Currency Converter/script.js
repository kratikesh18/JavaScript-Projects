console.log('hello')
let amountCurrency = document.getElementById("CurrencyList1").value
let convertedCurrency= document.getElementById("CurrencyList2").value


let amount = document.getElementById('fromValue')
let convertedAmount = document.getElementById('toValue')

let convertButton = document.getElementById('btnToConvert')


const printCurrecny =()=>{
    console.log(amountCurrency)
    console.log(convertedCurrency)
}
printCurrecny()

let convertedCurrencyRate = null;

let dataobj ={};
let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${amountCurrency}.json`


fetch(url)
.then((res)=>{
    return res.json();
})
.then((data)=>{
     convertedCurrencyRate = data[amountCurrency][convertedCurrency]        //83
})

function calculateCurrency(amt1 ,amt2){
    let convertedCurrencyAmount = amt1*amt2;
    return convertedCurrencyAmount;
}

convertButton.addEventListener("click" , function(){
    let amount1 = amount.value;
    let  convertedCurrencyAmount =  calculateCurrency(amount1, convertedCurrencyRate)
    convertedAmount.value = convertedCurrencyAmount
})