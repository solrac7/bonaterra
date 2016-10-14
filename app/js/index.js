$(function(){

	$('.parallax').parallax();
	$('.slider').slider({Height: 650});

	// HEADER INCLUDE
	$(".header").load("header.html", function(){

		$(".header__menuLista").find("a").click(function(){

			if ($(window).width() < 992) {
				$header__menu.fadeOut("fast");
				$("body").removeClass("no__scroll");
				$hamburgerMenu.removeClass("open");
				$(".prodHarvest").attr("href", "#productos");
			}else{
				$(".prodHarvest").attr("href", "#harvest");
			}

			$(this)
				.addClass("activo")
				.parent()
				.siblings()
				.find("a")
				.removeClass("activo");

			$('html, body')
	    .animate({
	      scrollTop: $($(this).attr('href')).offset().top - 77}, 1000);
		})


		var $header = $("header"), 
		    $header__menu = $(".header__menu"),
		    $hamburgerMenu = $(".menu");


		if ($("body").hasClass("det-products")) {
			$(".close").addClass("open")
		}

		// CLICK HAMBURGER MENU
		$hamburgerMenu.click(function(){
		  $(this)
		    .toggleClass('open');
		  
		  $("body")
		    .toggleClass("no__scroll")
		  
		  $header__menu
		    .fadeToggle("fast");
		  
		})
	
	});


	// FLECHAS SLIDE

	$(".slide__arrow-container.left").click(function(){
		$(this).parent(".slider").slider('prev');
	})

	$(".slide__arrow-container.right").click(function(){
		$(this).parent(".slider").slider('next');
	})




}) //Fin ready


$(window).load(function() {
  $('.preloader').fadeOut('slow');
  setTimeout(function(){ 
    $(".logo__container").addClass("upDown");
   }, 500);

  if ($(window).width() > 991 && $("body").hasClass("home")) {
	  var s = skrollr.init({
	      smoothScrollingDuration: 3000
	  });
	}
})