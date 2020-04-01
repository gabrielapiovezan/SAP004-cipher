const cipher = {
   
   encode (displacementNumber,message)
   {
   let  messageArray=[]
   for(let i=0;i<message.length;i++){
      messageArray[i] = ((message.charAt(i)).toUpperCase())
      if(messageArray[i].charCodeAt(0)<65  || messageArray[i].charCodeAt(0)>90)
         messageArray[i]= messageArray[i].charCodeAt(0)
      else
      {        
      let validateCondition = (messageArray[i].charCodeAt(0)-65) + displacementNumber
        // if(validadeCondition>=0)
         messageArray[i] = (validateCondition)%26+65
         //else
          //messageArray[i]= (Math.abs(validateCondition)%26-91)*-1
      }

   }
   return messageArray
   },

   decode (displacementNumber,message)
   {
   let  messageArray=[]
      for(let i=0;i<message.length;i++){
         messageArray[i] = ((message.charAt(i)).toUpperCase())
         if(messageArray[i].charCodeAt(0)<65  || messageArray[i].charCodeAt(0)>90)
            messageArray[i]= messageArray[i].charCodeAt(0)
         else
         {        
         let validateCondition = (messageArray[i].charCodeAt(0)-65) + displacementNumber
         if(validateCondition>=0)
            messageArray[i] = (validateCondition)%26+65
         else
          messageArray[i]= (Math.abs(validateCondition)%26-91)*-1
      }
      //console.log(String.fromCharCode(messageArray[i]))
       }
      return messageArray
   }
};
export default cipher;

//export function operacao()

