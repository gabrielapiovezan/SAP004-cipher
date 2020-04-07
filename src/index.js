import cipher from './cipher.js';

let result = document.getElementById("result")
let messageBox = document.getElementById("messageBox")
document.getElementById('messageBox').value = '';

const send = function ()
{
   let resultPrint
   result.innerHTML = ""   
   messageBox.innerHTML = ""
   let choice = document.getElementById("choice")
   let displacement = document.getElementById("displacement")
   let message= document.getElementById("messageBox").value
   let displacementNumber = parseInt(displacement.value)
   
   if(choice.choiceRadio.value=="d"){
   resultPrint = cipher.decode(displacementNumber,message)
   }
   else if(choice.choiceRadio.value=="c"){
   resultPrint = cipher.encode(displacementNumber,message)
   }
   result.innerHTML += `${resultPrint}`  

}
//document.getElementById("buttonSend").addEventListener('click', send, true);
//input
document.getElementById("messageBox").addEventListener("input", send);
document.getElementById("choice").addEventListener("click",send);
document.getElementById("displacement").addEventListener("input",send);