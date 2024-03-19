/* 
IIFE (Immediately Invoked Function Expression) is a JavaScript function 
that runs as soon as it is defined. The signature of it would be as below,
*/
(function ()
        {
          var message = "IIFE";
          console.log(message);
        }
 )();
 //console.log(message); //Error: message is not defined