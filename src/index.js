import cipher from './cipher.js';

let result = document.getElementById("result")
document.getElementById('messageBox').value = '';
//const button = document.querySelector('input');
//button.addEventListener('click', send);

const send = function ()
{  let resultPrint
   result.innerHTML = ``   
   let choice = document.getElementById("choice")
   let displacement = document.getElementById("displacement")
   let message= document.getElementById("messageBox").value
   let displacementNumber = parseInt(displacement.value)
   
   if(choice.choiceRadio.value=="d")
   {
   displacementNumber *=-1
   resultPrint = cipher.decode(displacementNumber,message)
   }
   else
   resultPrint = cipher.encode(displacementNumber,message)
   for(let i=0; i<resultPrint.length;i++)
   {
    result.innerHTML += `${String.fromCharCode(resultPrint[i])}`  
   }
}
document.getElementById('buttonSend').addEventListener('click', send, true);