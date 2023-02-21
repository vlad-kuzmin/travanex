(function ($) {
    $('#menu_btn').click(function () {
        $('.mobile_menu_list').slideToggle('medium');
        this.classList.toggle('opened');
        $('#menu_btn').attr('aria-expanded', $('#menu_btn').hasClass('opened'));
    });

    // Следит за изменением разрешения экрана, если разрешение
    // больше 769 px сворачивает открытое мобильное меню.
    $( window ).resize(function() {
	    var width = $( window ).width(), 
        menu = $('.mobile_menu_list'),
        button = $('#menu_btn');

        // Сварачивает меню если оно открыто
	    if (width > 769 && button.hasClass('opened')) {
            $('#menu_btn').removeClass('opened');
            menu.slideToggle('medium');
            button.attr('aria-expanded', button.hasClass('opened'));
        }
	  });
})(jQuery);