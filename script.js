$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('.social').toggleClass('social-toggle');
        $('.nav').toggleClass('toggle-nav');
    });
});
