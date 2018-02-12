	// Smooth scroll for .smoothScroll links

	$(document).on('click', '.smoothScroll', function(event){
	    var id = $(this).attr('href');
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $(id).offset().top
	    }, 600);
	    $(id).find('a').eq(0).focus();
	});