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

$(function () {
    const $navbar = $('#navbar');
    const $document = $(document);
    let lastScrollTop = 0;

    // Navbar hide on scroll down, show on scroll up
    $window.on('scroll', function () {
        const scrollTop = $window.scrollTop();

        if (scrollTop > lastScrollTop && scrollTop > 80) {
            $navbar.addClass('fade-out');
        } else {
            if (scrollTop + $window.height() < $document.height()) {
                $navbar.removeClass('fade-out');
            }
        }

        lastScrollTop = scrollTop;
    });

    // Smooth scroll for internal links
    $('a[href^="#"]').on('click', function (e) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 600);

            // Collapse responsive menu when a link is clicked
            const bsCollapse = $('.navbar-collapse');
            if (bsCollapse.hasClass('show')) {
                $('.navbar-toggler').trigger('click');
            }
        }
    });
});
