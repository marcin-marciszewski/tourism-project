
 
 // The idea for this part of the code was taken from: https://www.youtube.com/watch?v=V9CY0F4Wc7M
 
 $(document).ready(function() {
  $('h3').fadeOut(10);

 $(window).scroll(function() {
  const scrolled = Math.floor(window.scrollY / 100);
  console.log(scrolled);
 
  if (scrolled >=5) {
     $('.first').fadeIn(1000);
  } 
  
  if (scrolled >= 23) {
     $('.second').fadeIn(1000);
  } 
  
    if (scrolled >= 43) {
     $('.third').fadeIn(1000);
  } 
  
    if (scrolled >= 63) {
     $('.fourth').fadeIn(1000);
  } 
  
    if (scrolled >= 81) {
     $('.fifth').fadeIn(1000);
  } 
  
    if (scrolled >= 99) {
     $('.sixth').fadeIn(1000);
  } 
  
});

  $('.landing-text h1').mouseenter(function() {

  var col = ("rgb(" + Math.floor(Math.random() * 255) +
   "," + Math.floor(Math.random() * 255) + "," +
   Math.floor(Math.random() * 255) + ")");


  $(this).css('color', col);
  $(this).css('font-size', '14vw');
 });
 $('.landing-text h1').mouseleave(function() {
  $(this).css('color', 'white');
  $(this).css('font-size', '12vw');
 });

 $('h4').mouseenter(function() {
   var col = ("rgb(" + Math.floor(Math.random() * 255) +
   "," + Math.floor(Math.random() * 255) + "," +
   Math.floor(Math.random() * 255) + ")");
  $(this).css('color', col);
  $(this).css('font-family', 'Righteous')
 });
 $('h4').mouseleave(function() {
   var col = ("rgb(" + Math.floor(Math.random() * 255) +
   "," + Math.floor(Math.random() * 255) + "," +
   Math.floor(Math.random() * 255) + ")");
  $(this).css('color', col);
   $(this).css('font-family', 'Bungee')
 });


});
