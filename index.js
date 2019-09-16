let payInit = []
let payTip = []
let payFinal = []

alert("This program allows you to manually type in all initial payments and define your own tip amount")
let x = false
for(i = 0; !x; i++) {
    item = prompt("Write Initial Amount of Payment (Type no if you want to stop)")
    if (item != 'no') {
        payInit[i] = Number(item)
    }
    else {
        x = true
    }
}
 
let tipAmount = Number(prompt("Tip Amount in Percent (for 20% do write 20)")) / 100


for (i = 0; i < payInit.length; i++) {
  payTip[i] = payInit[i] * tipAmount
  payFinal[i] = payInit[i] + payTip[i]
}

const payOver100 = payFinal.filter(pay => pay > 100)



alert(`Initial pay: ${payInit}
Tip Percentage: ${tipAmount * 100}%
Final Pay: ${payFinal}
Tipping Amounts: ${payTip}
Pay Over 100: ${payOver100}`)