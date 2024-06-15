$(document).ready(() => {

    $(window).on('resize', function(){
        var win = $(this); //this = window
        if (win.width() >= 1000) { $('nav ul').show(); }
    });

     $('.nav-toggle').on('click', () => {
       $('nav ul').slideToggle('medium');
     });
   
     $('nav ul li a, .brand a').on('click', () => {
       $('nav ul').hide();
     });

    const viewHeight = $(window).height();
    const maxHeightScroll = 400;

    const nav = $("#nav-bar");

    $(window).on('scroll', () => {
        if ($(window).scrollTop() > (viewHeight - maxHeightScroll)) {
            console.log('passou');
            nav.addClass("fixed");

        }
        else {
            nav.removeClass("fixed");
        }
    });

    // Manipulador de evento para o envio do formulário
    $("#contact-form").on('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Recupera os dados do formulário
        const formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        };

        // Exibe os dados no console (ou envie para um servidor, etc.)
        console.log(formData);

        // Você pode enviar os dados usando AJAX, por exemplo:
        /*
        $.ajax({
            type: 'POST',
            url: 'seu-endpoint-aqui',
            data: formData,
            success: function(response) {
                console.log('Formulário enviado com sucesso!', response);
            },
            error: function(error) {
                console.error('Erro ao enviar formulário', error);
            }
        });
        */
    });

});