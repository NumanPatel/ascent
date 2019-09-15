
    new WOW().init();

    $(document).ready(function() {
        $("#recon").on("click", function() {
            if($("#recon").hasClass("active") === false){
                $("#recon").addClass("active")
            }
            if($("#escrow").hasClass("active") === true){
                $("#escrow").removeClass("active")
            }
            if($("#bcm").hasClass("active") === true){
                $("#bcm").removeClass("active")
            }
            $(window).scrollTop(0);
        });

        $("#bcm").on("click", function() {
            if($("#bcm").hasClass("active") === false){
                $("#bcm").addClass("active")
            }
            if($("#escrow").hasClass("active") === true){
                $("#escrow").removeClass("active")
            }
            if($("#recon").hasClass("active") === true){
                $("#recon").removeClass("active")
            }
            $(window).scrollTop(0);
        });

        $("#escrow").on("click", function() {
            if($("#escrow").hasClass("active") === false){
                $("#escrow").addClass("active")
            }
            if($("#recon").hasClass("active") === true){
                $("#recon").removeClass("active")
            }
            if($("#bcm").hasClass("active") === true){
                $("#bcm").removeClass("active")
            }
            $(window).scrollTop(0);
        });
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

