$(function() {

	// Owl carousel plugin https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
	});
  
  // Owl carousel plugin https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html
  $('.owl-carousel-2').owlCarousel({
    loop:true,
    margin:10,
    items:3,
    nav:false
    
	});
  
    // Owl carousel plugin https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html
  $('.owl-carousel-3').owlCarousel({
    loop:true,
    margin:28,
    items:3,
    nav:false
    
	});


});
