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



                $(".items").mouseenter(function() {
                  $(".items__image").addClass("showme");
                });

                $(".items").mouseleave(function() {
                  $(".items__image").removeClass("showme");
                });




                $(".VVD").mouseenter(function() {
                  $(".VVD__image").addClass("showme");
                });

                $(".VVD").mouseleave(function() {
                  $(".VVD__image").removeClass("showme");
                });


                $(".NRC").mouseenter(function() {
                  $(".NRC__image").addClass("showme");
                });

                $(".NRC").mouseleave(function() {
                  $(".NRC__image").removeClass("showme");
                });




                $(".design").mouseenter(function() {
                  $(".design__image").addClass("showme");
                });

                $(".design").mouseleave(function() {
                  $(".design__image").removeClass("showme");
                });




                $(".schiphol").mouseenter(function() {
                  $(".schiphol__image").addClass("showme");
                });

                $(".schiphol").mouseleave(function() {
                  $(".schiphol__image").removeClass("showme");
                });




                $(".wayfinding").mouseenter(function() {
                  $(".wayfinding__image").addClass("showme");
                });

                $(".wayfinding").mouseleave(function() {
                  $(".wayfinding__image").removeClass("showme");
                });




                $(".museum").mouseenter(function() {
                  $(".museum__image").addClass("showme");
                });

                $(".museum").mouseleave(function() {
                  $(".museum__image").removeClass("showme");
                });




                $(".team").mouseenter(function() {
                  $(".team__image").addClass("showme");
                });

                $(".team").mouseleave(function() {
                  $(".team__image").removeClass("showme");
                });




                $(".rhetoric").mouseenter(function() {
                  $(".rhetoric__image").addClass("showme");
                });

                $(".rhetoric").mouseleave(function() {
                  $(".rhetoric__image").removeClass("showme");
                });




                $(".flowers").mouseenter(function() {
                  $(".flowers__image").addClass("showme");
                });

                $(".flowers").mouseleave(function() {
                  $(".flowers__image").removeClass("showme");
                });



                $(".authorship").mouseenter(function() {
                  $(".authorship__image").addClass("showme");
                });

                $(".authorship").mouseleave(function() {
                  $(".authorship__image").removeClass("showme");
                });





                $(".postwar").mouseenter(function() {
                  $(".postwar__image").addClass("showme");
                });

                $(".postwar").mouseleave(function() {
                  $(".postwar__image").removeClass("showme");
                });





                $(".negotiating").mouseenter(function() {
                  $(".negotiating__image").addClass("showme");
                });

                $(".negotiating").mouseleave(function() {
                  $(".negotiating__image").removeClass("showme");
                });




                $(".moma").mouseenter(function() {
                  $(".moma__image").addClass("showme");
                });

                $(".moma").mouseleave(function() {
                  $(".moma__image").removeClass("showme");
                });




                $(".encyclo").mouseenter(function() {
                  $(".encyclo__image").addClass("showme");
                });

                $(".encyclo").mouseleave(function() {
                  $(".encyclo__image").removeClass("showme");
                });













    $('.nav').click(function() {
      $('.menu').toggleClass('showme');
    });




        $('.navtwo').click(function() {
          $('.menutwo').toggleClass('showme');
        });




        $(document).on('click', 'a.scroll', function(event){
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
        });









});
