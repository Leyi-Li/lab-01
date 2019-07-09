'use strict';

function colorChange(){
  if($(window).width() > 768){
    $('.box-1').css('background-color','#FFC09F');
    $('.box-2').css('background-color','#FFEE93');
    $('.box-3').css('background-color','#FCF5C7');
    $('.box-4').css('background-color','#A0CED9');
    $('.box-5').css('background-color','#ADF7D6');
    $('.box-6').css('background-color','#6EF9F5');
    $('.box-7').css('background-color','#63E2C6');
    $('.box-8').css('background-color','#DEC5E3');
    $('.box-9').css('background-color','#B6DCFE');
  }else{
    $('.box-1').css('background-color','aqua');
    $('.box-2').css('background-color','rgb(23, 116, 116)');
    $('.box-3').css('background-color','rgb(16, 73, 126)');
    $('.box-4').css('background-color','rgb(13, 18, 87)');
    $('.box-5').css('background-color','rgb(109, 18, 184)');
    $('.box-6').css('background-color','rgb(57, 13, 107)');
    $('.box-7').css('background-color','rgb(221, 40, 167)');
    $('.box-8').css('background-color','rgb(219, 23, 131)');
    $('.box-9').css('background-color','rgb(180, 32, 52)');  
  }
}

$(window).ready(colorChange);
$(window).resize(colorChange);


