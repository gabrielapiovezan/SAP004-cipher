import cipher from './cipher.js';

let result = document.getElementById("result")
let messageBox = document.getElementById("messageBox")
let displacement = document.getElementById("displacement")
document.getElementById("messageBox").value = '';



const send = function () {
   let resultPrint
   result.innerHTML = ""
   messageBox.innerHTML = ""
   let choice = document.getElementById("choice")
   let message = document.getElementById("messageBox").value
   let displacementNumber = parseInt(displacement.value)
   if (!displacementNumber)
      resultPrint = message
   else {
      if (choice.choiceRadio.value == "d") {
         resultPrint = cipher.decode(displacementNumber, message)
      }
      else if (choice.choiceRadio.value == "c") {
         resultPrint = cipher.encode(displacementNumber, message)
      }
   }
   result.innerHTML += `${resultPrint}`
}
const clear = function () {
   document.getElementById("sobre").style.display = "none"
   document.getElementById("sec").style.display = "none"
   document.getElementById("welcome").style.display = "none"
   document.getElementById("contatoEmail").style.display = "none"
}
const clearText = function () {
   let choice = document.getElementById("choice")
   choice.choiceRadio.value = "c"
   messageBox.value = ""
   document.getElementById("sec").style.display = "block"
   send()
}
const reverse = function () {
   let choice = document.getElementById("choice")
   let message = document.getElementById("messageBox")
   let result = document.getElementById("result")
   message.value = result.value
   if (choice.choiceRadio.value == "d")
      choice.choiceRadio.value = "c"
   else
      choice.choiceRadio.value = "d"
   send()

}
const cifraReceita = function () {
   clear()
   document.getElementById("sobre").style.display = "block"
}
const inicio = function () {
   clear()
   document.getElementById("welcome").style.display = "block"
}
const start = function () {
   clear()
   clearText()
}
const contato = function () {
   clear()
   document.getElementById("contatoEmail").style.display = "block"
}
clear()
inicio()
document.getElementById("messageBox").addEventListener("input", send);
document.getElementById("choice").addEventListener("click", send);
document.getElementById("displacement").addEventListener("click", send);
document.getElementById("cifraReceita").addEventListener("click", cifraReceita)
document.getElementById("inicio").addEventListener("click", inicio)
document.getElementById("sim").addEventListener("click", start)
document.getElementById("contato").addEventListener("click", contato)
document.getElementById("reverse").addEventListener("click", reverse)
document.getElementById("clearText").addEventListener("click", clearText)