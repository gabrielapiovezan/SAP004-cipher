import cipher from './cipher.js';

let result = document.getElementById("result")
let messageBox = document.getElementById("messageBox")
let displacement = document.getElementById("displacement")
messageBox.value = '';



const send = function () {
   let resultPrint
   result.innerHTML = ""
   messageBox.innerHTML = ""
   const choice = document.getElementById("choice")
   const message = messageBox.value
   const displacementNumber = parseInt(displacement.value)
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
   document.getElementById("about-us").style.display = "none"
   document.getElementById("cipher-menu").style.display = "none"
   document.getElementById("welcome").style.display = "none"
   document.getElementById("mail").style.display = "none"
}

const clearText = function () {
   let choice = document.getElementById("choice")
   choice.choiceRadio.value = "c"
   messageBox.value = ""
   document.getElementById("cipher-menu").style.display = "block"
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

const about = function () {
   clear()
   document.getElementById("about-us").style.display = "block"
}

const home = function () {
   clear()
   document.getElementById("welcome").style.display = "block"
}

const start = function () {
   clear()
   clearText()
}

const contact = function () {
   clear()
   document.getElementById("mail").style.display = "block"
}

clear()
home()

document.getElementById("messageBox").addEventListener("input", send);
document.getElementById("choice").addEventListener("click", send);
document.getElementById("displacement").addEventListener("click", send);
document.getElementById("about").addEventListener("click", about)
document.getElementById("home").addEventListener("click", home)
document.getElementById("yes").addEventListener("click", start)
document.getElementById("contact").addEventListener("click", contact)
document.getElementById("reverse").addEventListener("click", reverse)
document.getElementById("clearText").addEventListener("click", clearText)

