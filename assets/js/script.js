$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});

$(function () {

    $('[data-toggle="tooltip"]').tooltip()

})
$("#envioformulario").click(function () {
    alert("El formulario fue enviado correctamente");
})