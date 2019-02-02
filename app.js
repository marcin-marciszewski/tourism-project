 $(document).ready(function() {
  $('h3').fadeOut(10);

  $('.first').appear(function() {
   $('.first-show').fadeIn(1500);
  });

  $('.second').appear(function() {
   $('.second-show').fadeIn(1500);
  });

  $('.third').appear(function() {
   $('.third-show').fadeIn(1500);
  });

  $('.fourth').appear(function() {
   $('.fourth-show').fadeIn(1500);
  });

  $('.fifth').appear(function() {
   $('.fifth-show').fadeIn(1500);
  });

  $('.sixth').appear(function() {
   $('.sixth-show').fadeIn(1500);
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
 