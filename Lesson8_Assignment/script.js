/**
* Created with LIS2360_Lesson8_jQuery.
* Program Name: Recipe Display Application
* Author: therealjrhobbs
* Date: 2015-11-12
*FIlename: script.js
* Time: 09:13 PM
* To change this template use Tools | Templates.
*/
define(function() {
return {};
});

function display(event){
   
    $(event.currentTarget).next().fadeIn("slow")
  
}//end of display($()

 $("h3").click(display);

