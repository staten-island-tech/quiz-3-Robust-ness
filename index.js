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
 

let tipAmount = []

for (let i in payInit) {
  tipAmount[i] = payInit[i] < 50 ? .2 : payInit[i] >= 50 && payInit[i] <= 200 ? .15 : .1
  payTip[i] = payInit[i] * tipAmount[i]
  payFinal[i] = payInit[i] + payTip[i]
}

const payOver100 = payFinal.filter(pay => pay > 100)



alert(`Initial pay: ${payInit}
Tip Percentage: ${tipAmount}%
Final Pay: ${payFinal}
Tipping Amounts: ${payTip}
Pay Over 100: ${payOver100}`)