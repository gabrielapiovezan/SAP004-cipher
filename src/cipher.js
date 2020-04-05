const cipher = {

   encode(displacementNumber, message) {
      if (!displacementNumber || !message)
         throw new TypeError("Parametros não conferem");
      else {
         let messageReturn = ""
         let messageArray = []
         for (let i = 0; i < message.length; i++) {
            messageArray[i] = (message.charAt(i).toUpperCase())
            if ((messageArray[i].charCodeAt(0) < 65 || messageArray[i].charCodeAt(0) > 90) )
               messageArray[i] = (messageArray[i].charCodeAt())
            else {
               let validateCondition = (messageArray[i].charCodeAt(0) - 65) + displacementNumber
               messageArray[i] = (validateCondition) % 26 + 65
            }
            messageReturn += String.fromCharCode(messageArray[i])
         }
         return messageReturn
      }
   },

   decode(displacementNumber = 1, message) {
      if (!displacementNumber || !message)
         throw new TypeError("Parametros não conferem");
      else {
         displacementNumber *= -1
         let messageReturn = ""
         let messageArray = []
         for (let i = 0; i < message.length; i++) {
            messageArray[i] = (message.charAt(i).toUpperCase())
            if (messageArray[i].charCodeAt(0) < 65 || messageArray[i].charCodeAt(0) > 90)
               messageArray[i] = (messageArray[i].charCodeAt(0))
            else {
               let validateCondition = (messageArray[i].charCodeAt(0) - 65) + displacementNumber
               if (validateCondition % 26 >= 0)
                  messageArray[i] = (validateCondition) % 26 + 65
               else {
                  messageArray[i] = (Math.abs(validateCondition) % 26 - 91) * -1
               }

            }
            messageReturn += String.fromCharCode(messageArray[i])
         }
         return messageReturn
      }
   }
};
export default cipher;


