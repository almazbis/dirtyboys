	$('.js-menu-btn').click(function(){
		$(this).toggleClass('expanded');
		$('.js-menu-links').slideToggle().toggleClass('expanded');
	});