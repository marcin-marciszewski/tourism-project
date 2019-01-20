$(document).ready(function(){
 $('.landing-text h1').mouseenter(function(){
    
    var col = ("rgb(" + Math.floor(Math.random() * 255)
      + "," + Math.floor(Math.random() * 255) + ","
      + Math.floor(Math.random() * 255) + ")");


     $(this).css('color', col);
     $(this).css('font-size', '14vw');
 });
 $('.landing-text h1').mouseleave(function(){
     $(this).css('color', 'white');
     $(this).css('font-size', '12vw');
 });
});

