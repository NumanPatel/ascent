    //  $('.section2').hide();
    // $("#recon").click(function () {
    //            // $('.section1').hide();
    //            $(".section1").hide("slide", {direction: "right"}, 1000);
    //            // $(".section1").animate({left: '250px'});
    //            // $('.section2').show();

    //    });
    new WOW().init();

    $(document).ready(function() {
        $("#recon").on("click", function() {
            $(".section1").animateAlert('slideOutUp', 6000);
        });
        $("#close-alert-box-news").on("click", function() {
            $("#alert-box-news").animateAlert('slideOutUp', 500, true);
        });
    });