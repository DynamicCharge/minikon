$(document).ready(function() {
    $('.main-slide').slick( {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        asNavFor: '.slide-row'
    });
    $('.slide-row').slick( {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        focusOnSelect: true,
        asNavFor: '.main-slide'
    });
});