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


