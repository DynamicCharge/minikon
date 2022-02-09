$(document).ready(function(){
    $('.filters__mobile').on('click', function() {
        if($('.mobile__ovelray').hasClass('ovelray__active')){
            $('.mobile__ovelray').removeClass('ovelray__active');

            document.body.style.position = '';
            document.body.style.top = '';
        } else {
            $('.mobile__ovelray').addClass('ovelray__active');
            
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
        }
    });

    $('.close__ovelray').on('click', function() {
        $('.mobile__ovelray').removeClass('ovelray__active');

        document.body.style.position = '';
        document.body.style.top = '';
    });
});