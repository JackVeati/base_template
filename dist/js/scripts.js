(function(window, undefined) {
    'use strict';
    (function($) {
        $(document).ready(function () {
                    // If a link has a dropdown, add sub menu toggle.
                    $('test').click(function(e) {
                        $(this).siblings('.nav-dropdown').toggle();
                        // Close one dropdown when selecting another
                        $('.nav-dropdown').not($(this).siblings()).hide();
                        e.stopPropagation();
                    })
        });
    })(jQuery);
})(window);



(function (window, undefined) {
    'use strict';
    (function ($) {
        $(document).ready(function () {
            // drfgjhlkkjhgfdsrtyuiouy
            $('nav div ul li a:not(:only-child)').click(function (e) {
                $(this).siblings('.pippo').toggle();
                // Close one dropdown when selecting another
                $('.pippo').not($(this).siblings()).hide();
                e.stopPropagation();
            });
            // Clicking away from dropdown will remove the dropdown class
            $('html').click(function () {
                $('.nav-dropdown').hide();
            });
            // Toggle open and close nav styles on click
            $('.nav-mobile-line').click(function () {
                $('nav div ul').slideToggle();
            });
            // Hamburger to X toggle
            $('.nav-mobile-line').on('click', function () {
                this.classList.toggle('active');
            });
            
        });
    })(jQuery);
})(window);