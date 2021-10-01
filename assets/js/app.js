$(document).ready(function () {
    console.log("ready!");
    
    $(window).scroll(function () {
        if ($("#navbar").offset().top > 56) {
            $("#navbar").addClass("color-nav");
        } else {
            $("#navbar").removeClass("color-nav");
        }
    });


    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })


    //remuebe "quienes somos"

    $("#Viaje").click(function() {
        $("#texto1").toggle();
    });


    //boton se torna rojo 

    $("#tfinal").dblclick(function(){
        $("#tfinal").addClass('text-danger');
    });


  });