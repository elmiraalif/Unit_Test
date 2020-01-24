//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 */


 function studentNumberValidator(studentNumber){

   let regex_student = /(n | N)[0-9]{8}/;
   if(studentNumber.match(regex_student)){
     console.log(true);
     return true;
   }else if(!isNaN(studentNumber) || studentNumber === undefined){
     return false;
   }
   console.log(studentNumber);

 }
