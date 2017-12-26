if ($("#header-particles").length){

  particlesJS('header-particles',
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#000"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.4,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#000",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 5,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 10,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }

  );


}


if ($("#services-particles").length){

  particlesJS('services-particles',
    {
      "particles": {
        "number": {
          "value": 60,
          "density": {
            "enable": true,
            "value_area": 700
          }
        },
        "color": {
          "value": "#F11C3E"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.4,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#F11C3E",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 5,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false
          },
          "onclick": {
            "enable": false
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 10,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }

  );


}




$(document).ready(function(){


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


  @@include('./includes/form.js');

});


