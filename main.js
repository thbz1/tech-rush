$(document).ready(function() {
    $('.hamburger').click(function() {
        $('nav').toggleClass('active')
        $('#background').toggleClass('active')

        if (!$('nav').hasClass('active')) {
            $('#dropdown').hide()
        }
    })

    $('nav ul li:nth-child(-n+2) a, #dropdown li a').click(function() {
        $('nav').removeClass('active')
        $('#background').removeClass('active')
    })

    $(document).click(function(e) {
        if (!$(e.target).closest('header').length) {
            $('nav').removeClass('active')
            $('#background').removeClass('active')
            $('#dropdown').hide()
        }
    });

    $('#submenu').click(function() {
        $('#dropdown').toggle({
        }, 200)
    })

    $('nav li a').click(function(event) {
        event.preventDefault()

        if ($(this).text() === "Produtos") {
            return
        }

        var target = $(this).attr('href')

        if (target === "#") {
            $('html, body').animate({
                scrollTop: 0
            }, 200)
        } else {
            $('html, body').animate({
                scrollTop: $(target).offset().top - $('header').outerHeight()
            }, 200)
        }

        $('#dropdown').hide()
    })
})