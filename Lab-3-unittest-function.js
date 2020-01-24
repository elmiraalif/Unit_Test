//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 */

 function checkHumbrId(studentNumber){

   let regex_student = /^(n|N)[0-9]{8}/;
   if(!isNaN(studentNumber) || studentNumber === undefined)
     {
     return false;
   }else if(studentNumber.match(regex_student)){
     return true;
   }else
   {
     return false;
   }

 }
test__checkHumbrId();
