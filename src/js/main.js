$(document).ready(function(){

    setTimeout(function(){
		$( "#main" ).fadeTo( 300 , 1, function() {
		    $( "#main" ).addClass('loaded');
		});
    }, 600);

	@@include('./includes/_header-slide-up-title.js');

	@@include('./includes/smooth-scroll.js');

	@@include('./includes/modals.js');
	
	@@include('./includes/_go-to-form.js');

	@@include('./includes/menu-toggle.js')

	@@include('./includes/form.js');

});