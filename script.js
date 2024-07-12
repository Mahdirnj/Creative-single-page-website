    const $animation_elements = $('.section-title, .card');
    const $window = $(window);

    function check_if_in_view() {
        const window_height = $window.height();
        const window_top_position = $window.scrollTop();
        const window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            const $element = $(this);
            const element_height = $element.outerHeight();
            const element_top_position = $element.offset().top;
            const element_bottom_position = (element_top_position + element_height);

            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

$(document).ready(function() {
    const $navbar = $('#navbar');
    const $window = $(window);
    const $document = $(document);
    let lastScrollTop = 0;

    $window.on('scroll', function() {
        const scrollTop = $window.scrollTop();

        if (scrollTop > lastScrollTop && scrollTop > 50) {
            $navbar.addClass('fade-out');
        } else {
            if (scrollTop + $window.height() < $document.height()) {
                $navbar.removeClass('fade-out');
            }
        }

        lastScrollTop = scrollTop;
    });
});
