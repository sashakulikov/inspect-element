$(document).ready(function(){

  $(window).focus();

// Text following cursor
  $(document).on('mousemove', function(event){
     $('.active').css({
       left: event.pageX,
       top: event.pageY
     })
  })

  // Rotating by pressing buttons
  var rotation = 0;
  var scaling = 1;

  document.onkeydown = function(e) {
      switch(e.which) {
          case 37: // left
            rotation = rotation - 2;
            $('.active').css({
              'transform': 'rotate('+rotation+'deg) scale('+scaling+')'
            });
          break;

          case 39: // right
            rotation = rotation + 2;
            $('.active').css({
              'transform': 'rotate('+rotation+'deg) scale('+scaling+')'
            });
          break;

          case 38: // up
            scaling = scaling + 0.3;
            $('.active').css({
              'transform': 'rotate('+rotation+'deg) scale('+scaling+')'
            });
          break;

          case 40: // down
            scaling = scaling - 0.3;
            $('.active').css({
              'transform': 'rotate('+rotation+'deg) scale('+scaling+')'
            });
            break;
      };

      e.preventDefault(); // prevent the default action (scroll / move caret)

  };

  // Changing colors when composition is done

  var done = 0;

  $(document).on('click', function(){
    rotation = 0;
    scaling = 1;
    done = done + 1;

    if (done == 18) {
      $('body').addClass('done');
      $('.active').removeClass('active').addClass('positioned').next().addClass('active')
    }

    else if (done < 19) {
      $('.active').removeClass('active').addClass('positioned').next().addClass('active')
    }
    console.log(done)
  })

});
