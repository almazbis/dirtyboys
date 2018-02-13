	$('.js-go-to-form').on('click', function(e){
		e.preventDefault();

		var formMessage = $(this).attr('data-form-message');

		$('html, body').animate({
		    scrollTop: $('#contact').offset().top
		}, 600);
		
		$('#contact-message').val(formMessage);
		$('#contact-message').focus();

	});