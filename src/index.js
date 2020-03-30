import cipher from './cipher.js';

console.log(cipher);


let saida = document.getElementById("saida")
document.getElementById('caixaDeTexto').value = '';

function enviar()
{  
   saida.innerHTML = ``   
   let escolha = document.getElementById("escolha")
   let deslocamento = document.getElementById("deslocamento")
   let texto= document.getElementById("caixaDeTexto").value
   let desl = parseInt(deslocamento.value)
   if(escolha.escolhaRadio.value=="d")
   desl *=-1
   //let resultado = cipher.funcao.operacao(desl,texto)

   for(let i=0; i<resultado.length;i++)
   {
    saida.innerHTML += `${String.fromCharCode(resultado[i])}`  
   }
}