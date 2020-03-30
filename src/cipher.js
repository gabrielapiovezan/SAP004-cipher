const cipher = {
nome:"Gabi"
};




operacao  (desl,texto)
{
let a =[]
   for(let i=0;i<texto.length;i++){
      a[i] = ((texto.charAt(i)).toUpperCase())
      if(a[i].charCodeAt(0)<65  || a[i].charCodeAt(0)>90)
      a[i]= a[i].charCodeAt(0)
      else
      {        
         alfabetoDesl = (a[i].charCodeAt(0)-65) + desl
         if(alfabetoDesl>=0)
            a[i] = (alfabetoDesl)%26+65
         else
            a[i]= (Math.abs(alfabetoDesl)%26-91)*-1
      }
      console.log(String.fromCharCode(a[i]))
   }
return a
} 
export default cipher;