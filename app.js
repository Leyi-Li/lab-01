'use strict';

function colorChange(){
  if($(window).width() > 961){
    $('.box-a').css('background-color','#FFC09F');
    $('.box-b').css('background-color','#FFEE93');
    $('.box-c').css('background-color','#FCF5C7');
    $('.box-d').css('background-color','#A0CED9');
    $('.box-e').css('background-color','#ADF7D6');
    $('.box-f').css('background-color','#6EF9F5');
    $('.box-g').css('background-color','#63E2C6');
    $('.box-h').css('background-color','#DEC5E3');
    $('.box-i').css('background-color','#B6DCFE');
  }else if(960 > $(window).width() && $(window).width() >768 ){
    $('.box-a').css('background-color','#D4C5E2');
    $('.box-b').css('background-color','#C9D7F8');
    $('.box-c').css('background-color','#A7E2E3');
    $('.box-d').css('background-color','#80CFA9');
    $('.box-e').css('background-color','#4C6663');
    $('.box-f').css('background-color','#42F2F7');
    $('.box-g').css('background-color','#46ACC2');
    $('.box-h').css('background-color','#EA638C');
    $('.box-i').css('background-color','#B33C86');
  }else{
    $('.box-a').css('background-color','aqua');
    $('.box-b').css('background-color','rgb(23, 116, 116)');
    $('.box-c').css('background-color','rgb(16, 73, 126)');
    $('.box-d').css('background-color','rgb(13, 18, 87)');
    $('.box-e').css('background-color','rgb(109, 18, 184)');
    $('.box-f').css('background-color','rgb(57, 13, 107)');
    $('.box-g').css('background-color','rgb(221, 40, 167)');
    $('.box-h').css('background-color','rgb(219, 23, 131)');
    $('.box-i').css('background-color','rgb(180, 32, 52)');  
  }
}

$(window).ready(colorChange);
$(window).resize(colorChange);


