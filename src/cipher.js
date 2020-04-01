const cipher = {
   
   encode (displacementNumber,message)
   {
   let messageReturn =""
   let  messageArray=[]
   for(let i=0;i<message.length;i++){
      messageArray[i] = ((message.charAt(i)).toUpperCase())
      if(messageArray[i].charCodeAt(0)<65  || messageArray[i].charCodeAt(0)>90)
         messageArray[i]= messageArray[i].charCodeAt(0)
      else
      {        
      let validateCondition = (messageArray[i].charCodeAt(0)-65) + displacementNumber
         messageArray[i] = (validateCondition)%26+65
         messageReturn +=String.fromCharCode(messageArray[i])
      }

   }
   return messageReturn
   },

   decode (displacementNumber,message)
   {
   displacementNumber *=-1  
   let messageReturn =""
   let  messageArray=[]
      for(let i=0;i<message.length;i++){
         messageArray[i] = ((message.charAt(i)).toUpperCase())
         if(messageArray[i].charCodeAt(0)<65  || messageArray[i].charCodeAt(0)>90)
         messageArray[i]= messageArray[i].charCodeAt(0) 
         else
         {   
            let validateCondition = (messageArray[i].charCodeAt(0)-65) + displacementNumber
            if(validateCondition%26>=0)
               messageArray[i] = (validateCondition)%26+65
            else
            {
               messageArray[i]= (Math.abs(validateCondition)%26-91)*-1
            }
            messageReturn +=String.fromCharCode(messageArray[i])
         }
       } 
      return messageReturn 
   }
};
export default cipher;


