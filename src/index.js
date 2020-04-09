import cipher from './cipher.js';

let result = document.getElementById("result")
let messageBox = document.getElementById("messageBox")
<<<<<<< HEAD
let displacement = document.getElementById("displacement")
=======
>>>>>>> 48ecd9cbc51bde619873e14493cea6dbc864f413
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



document.getElementById("messageBox").addEventListener("input", send);
document.getElementById("choice").addEventListener("click", send);
document.getElementById("displacement").addEventListener("click", send);