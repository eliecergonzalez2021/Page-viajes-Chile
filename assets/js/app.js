$(document).ready(function () {
    console.log("ready!");
    
    $(window).scroll(function () {
        if ($("#navbar").offset().top > 56) {
            $("#navbar").addClass("color-nav");
        } else {
            $("#navbar").removeClass("color-nav");
        }
    });










  });