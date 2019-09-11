
    new WOW().init();

    $(document).ready(function() {
        $("#recon").on("click", function() {
            $(".section1").animateAlert('slideOutUp', 6000);
        });
        $("#close-alert-box-news").on("click", function() {
            $("#alert-box-news").animateAlert('slideOutUp', 500, true);
        });
         $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    items : 4,
    navigation: true,
    nav:true,
    navigationText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
    
    
          $('#b').hide();
  $('#c').hide();
  $('#d').hide();
  $('.hover2').hover(
  function(){

     $('#a').toggle(10);
       $('#b').toggle(10);
   });
   $('.hover3').hover(
  function(){

     $('#a').toggle(10);
       $('#c').toggle(10);
   });
    $('.hover4').hover(
  function(){

     $('#a').toggle(10);
       $('#d').toggle(10);
   });

    $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 12000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    });