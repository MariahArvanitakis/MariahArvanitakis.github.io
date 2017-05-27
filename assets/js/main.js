$(document).ready(function() {


    $(".dior").mouseenter(function() {
      $(".dior__image").addClass("showme");
    });

    $(".dior").mouseleave(function() {
      $(".dior__image").removeClass("showme");
    });





    $(".apple").mouseenter(function() {
      $(".apple__image").addClass("showme");
    });

    $(".apple").mouseleave(function() {
      $(".apple__image").removeClass("showme");
    });



    $(".euro").mouseenter(function() {
      $(".euro__image").addClass("showme");
    });

    $(".euro").mouseleave(function() {
      $(".euro__image").removeClass("showme");
    });




    $(".comme").mouseenter(function() {
      $(".comme__image").addClass("showme");
    });

    $(".comme").mouseleave(function() {
      $(".comme__image").removeClass("showme");
    });




    $(".nespresso").mouseenter(function() {
      $(".nespresso__image").addClass("showme");
    });

    $(".nespresso").mouseleave(function() {
      $(".nespresso__image").removeClass("showme");
    });



        $(".porsche").mouseenter(function() {
          $(".porsche__image").addClass("showme");
        });

        $(".porsche").mouseleave(function() {
          $(".porsche__image").removeClass("showme");
        });



        $(".aldi").mouseenter(function() {
          $(".aldi__image").addClass("showme");
        });

        $(".aldi").mouseleave(function() {
          $(".aldi__image").removeClass("showme");
        });





    $('.nav').click(function() {
      $('.menu').toggleClass('showme');
    });




        $('.navtwo').click(function() {
          $('.menutwo').toggleClass('showme');
        });




        $(document).on('click', 'a.scrollto', function(event){
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
        });




});
