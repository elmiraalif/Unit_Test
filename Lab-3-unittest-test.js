// jshint esversion:6
//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========



function test__checkHumbrId(valueIn,expected){
    "use strict";
    let result = checkHumbrId(valueIn);
    
    if(result=== expected){
        result = "==PASSED==".fontcolor("green");
    }
    else {
        result = "xxFAILEDxx".fontcolor("red");
    }
    let msg = "Value:" + valueIn + "| Expected : " + expected + " | Result : " + result + "<br>";

    let msgbox = document.getElementById("data");
    msgbox.innerHTML += msg;

}
test__checkHumbrId("N12345678",true);
 test__checkHumbrId("n12345678",true);
test__checkHumbrId("N1234567",false);
test__checkHumbrId("n1234567",false);
test__checkHumbrId("12345678",false);
test__checkHumbrId("1234567",false);
test__checkHumbrId("abcdefgh",false);
test__checkHumbrId(undefined,false);
test__checkHumbrId("a1234567",false);
test__checkHumbrId("A1234567",false);
