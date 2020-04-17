const cipher = {
   encode (displacementNumber, message)
   {
      const messageReturn = start(displacementNumber, message)
      return messageReturn;
   },
   decode (displacementNumber, message)
   {
      const messageReturn = start(-displacementNumber, message)
      return messageReturn;
   }
  };
  
  const start = function(displacementNumber, message) {
  
     if (!displacementNumber || !message)
        throw new TypeError("Parametros não conferem");
     else {
        let messageReturn = ""
        let messageArray = []
        let letter = 0
        let spin = 91
        for (let i = 0; i < message.length; i++) {
           messageArray[i] = (message.charAt(i))
           if (messageArray[i].charCodeAt(0) >= 97 && messageArray[i].charCodeAt(0) <= 122) {
              letter = 97
              spin = 123
           }
           if (messageArray[i].charCodeAt(0) >= 65 && messageArray[i].charCodeAt(0) <= 90) {
              letter = 65
              spin = 91
           }
           if (letter === 0)
              messageArray[i] = (messageArray[i].charCodeAt())
           else {
              let validateCondition = (messageArray[i].charCodeAt(0) - letter) + displacementNumber
              if (validateCondition % 26 >= 0)
                 messageArray[i] = validateCondition % 26 + letter
              else
                 messageArray[i] = (Math.abs(validateCondition) % 26 - spin) * -1
           }
           letter = 0
           messageReturn += String.fromCharCode(messageArray[i])
        }
        return messageReturn
     }
  }
  export default cipher;