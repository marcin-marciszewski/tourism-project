 $(document).ready(function() {
  $('h3').fadeOut(10);

  var images = ["ny.jpeg", "london.jpeg", "tokyo.jpeg", "rio.jpeg", "cape.jpeg", "sydney.jpeg"];
  var folders = ["img[src='img/attra/", "img[src='img/hotels/", "img[src='img/restaurants/"]

  for (i = 0; i < images.length; i++) {
   $(folders[0] + images[i]).fadeOut(10);
   $(folders[1] + images[i]).fadeOut(10);
   $(folders[2] + images[i]).fadeOut(10);
  };

  console.log(folders[0] + images[0]);
  $('.first').appear(function() {
   $('.first-show').fadeIn(2000);
   $(folders[0] + images[0]).fadeIn(1000);
   $(folders[1] + images[0]).fadeIn(1000);
   $(folders[2] + images[0]).fadeIn(1000);
  });

  $('.second').appear(function() {
   $('.second-show').fadeIn(2000);
   $(folders[0] + images[1]).fadeIn(1000);
   $(folders[1] + images[1]).fadeIn(1000);
   $(folders[2] + images[1]).fadeIn(1000);

  });

  $('.third').appear(function() {
   $('.third-show').fadeIn(2000);
   $(folders[0] + images[2]).fadeIn(1000);
   $(folders[1] + images[2]).fadeIn(1000);
   $(folders[2] + images[2]).fadeIn(1000);
  });

  $('.fourth').appear(function() {
   $('.fourth-show').fadeIn(2000);
   $(folders[0] + images[3]).fadeIn(1000);
   $(folders[1] + images[3]).fadeIn(1000);
   $(folders[2] + images[3]).fadeIn(1000);
  });

  $('.fifth').appear(function() {
   $('.fifth-show').fadeIn(2000);
   $(folders[0] + images[4]).fadeIn(1000);
   $(folders[1] + images[4]).fadeIn(1000);
   $(folders[2] + images[4]).fadeIn(1000);
  });

  $('.sixth').appear(function() {
   $('.sixth-show').fadeIn(2000);
   $(folders[0] + images[5]).fadeIn(1000);
   $(folders[1] + images[5]).fadeIn(1000);
   $(folders[2] + images[5]).fadeIn(1000);
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
 