$(document).ready(function() {
    
    $('.goods__filter-label').on('click', '.goods__filter-input[type=checkbox]', function() {
        if(!$(this).parents('.goods__filter-label').hasClass('active-label')){
            $(this).parents('.goods__filter-label').addClass('active-label');
            $(this).parents('.goods__filter-form__container')
            .children('.goods__filter-form__container__options')
            .addClass('active-options')
            .show(2000);
        } else {
            $(this).parents('.goods__filter-label').removeClass('active-label');
            $(this).parents('.goods__filter-form__container')
            .children('.goods__filter-form__container__options')
            .removeClass('active-options')
            .hide(2000);
        }
          
    });
});