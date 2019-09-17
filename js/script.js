
    new WOW().init();

    $(document).ready(function() {
        $(".recon2").on("click", function() {
            if($(".recon2").hasClass("active") === false){
                $(".recon2").addClass("active")
            }
            if($(".escrow2").hasClass("active") === true){
                $(".escrow2").removeClass("active")
            }
            if($(".bcm2").hasClass("active") === true){
                $(".bcm2").removeClass("active")
            }
            $(window).scrollTop(0);
        });

        $(".bcm2").on("click", function() {
            if($(".bcm2").hasClass("active") === false){
                $(".bcm2").addClass("active")
            }
            if($(".escrow2").hasClass("active") === true){
                $(".escrow2").removeClass("active")
            }
            if($(".recon2").hasClass("active") === true){
                $(".recon2").removeClass("active")
            }
            $(window).scrollTop(0);
        });

        $(".escrow2").on("click", function() {
            if($(".escrow2").hasClass("active") === false){
                $(".escrow2").addClass("active")
            }
            if($(".recon2").hasClass("active") === true){
                $(".recon2").removeClass("active")
            }
            if($(".bcm2").hasClass("active") === true){
                $(".bcm2").removeClass("active")
            }
            $(window).scrollTop(0);
        });
        $(".recon2").on("click", function() {
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
  $('.hover1').hover(
  function(){

    $(this).toggleClass('hue');

   });

  $('.hover2').hover(
  function(){

    $(this).toggleClass('hue');
     $('#a').toggle(10);
       $('#b').toggle(10);

   });
   $('.hover3').hover(
  function(){
    $(this).toggleClass('hue');
     $('#a').toggle(10);
       $('#c').toggle(10);
   });
    $('.hover4').hover(
  function(){

    $(this).toggleClass('hue');

     $('#a').toggle(10);
       $('#d').toggle(10);
   });

    $('.count').each(function () {
    $(this).prop('Counter',100).animate({
        Counter: $(this).text()
    }, {
        duration: 1200000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    });


const mHTML = document.getElementById('message'),
messages = [
  'Financial Automation',
];
let currentMessage = 0;
function typeMessage() {
  if (!messages[currentMessage]) {
    currentMessage = 0;
  }
  const currentStr = messages[currentMessage];
  currentStr.split();
  let part = '';
  let currentLetter = 0;
  let int1 = setInterval(()=>{
    if (!currentStr[currentLetter]) {
      currentMessage++;
      setTimeout(()=>{
        deleteMessage(part);
      }, 900);
      clearInterval(int1);
    } else {
      part += currentStr[currentLetter++];
      mHTML.innerHTML = part;
    }
  }, 200);
}
typeMessage();

$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});