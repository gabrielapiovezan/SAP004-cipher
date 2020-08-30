const cipher = {
   encode(displacementNumber, message) {
      const messageReturn = start(displacementNumber, message)
      return messageReturn;
   },

   decode(displacementNumber, message) {
      const messageReturn = start(-displacementNumber, message)
      return messageReturn;
   }
};

const start = function (displacementNumber, message) {
   if (!displacementNumber || !message)
      throw new TypeError("Parametros não conferem");

   else {

      let messageReturn = ""

      let letter = 0
      let spin = 91

      for (let i = 0; i < message.length; i++) {

         if ((message.charCodeAt(i) >= 97) && (message.charCodeAt(i) <= 122)) {
            letter = 97
            spin = 123
         }

         else if ((message.charCodeAt(i) >= 65) && (message.charCodeAt(i) <= 90)) {
            letter = 65
         }

         if (letter === 0) {
            messageReturn += String.fromCharCode(message.charCodeAt(i))

         }
         else {
            let validateCondition = (message.charCodeAt(i) - letter) + displacementNumber
            if (validateCondition % 26 >= 0)
               messageReturn += String.fromCharCode(validateCondition % 26 + letter)
            else
               messageReturn += String.fromCharCode((Math.abs(validateCondition) % 26 - spin) * -1)
         }
         letter = 0

      }
      return messageReturn
   }
}
export default cipher;