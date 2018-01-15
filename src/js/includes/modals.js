
// Smooth scroll for .smoothScroll links

$(document).on('click', '.smoothScroll', function(event){
    var id = $(this).attr('href');
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 600);
    $(id).find('a').eq(0).focus();
});


// inputs

$('.input-text input, .input-text textarea').blur(function(){
    if( $(this).val() != "" && $(this).val().length > 0 ) {
      $(this).parent('label').addClass('input-dirty');
    } else {
      $(this).parent('label').removeClass('input-dirty');
    }
});


// services modals

var modalsExpanded = 0;

$('.modalTrigger').on('click', function(event){
  event.preventDefault();
  var goal = $(this).attr('href');

  if( $(goal).length > 0 ) {

    $('html').css('overflow-y', 'hidden');
    $(goal).fadeIn(250).addClass('expanded');

    modalsExpanded++;

    if(modalsExpanded == 1) {

      parentModal = goal;

    } else if (modalsExpanded > 1) {

      $(parentModal).css('overflow-y', 'hidden');
      console.log($(parentModal).css('overflow-y'));

    }

  }

});


// modal close button

$('.modalClose').on('click', function(){
  $(this).parent().fadeOut().removeClass('expanded');
  
  if(modalsExpanded == 1) {
    $('html').css('overflow-y', 'auto');
    parentModal = "";
  } else if (modalsExpanded > 1) {
    $(parentModal).css('overflow-y', 'auto');
  }

  modalsExpanded--;
  
});


