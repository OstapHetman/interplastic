$(document).ready(function () {

    $('.main-nav li').each(function () {
        if ($(this).find('ul').length) {
            $(this).children("a").after('<span class="opener"></span>');
            $(this).addClass('dropdown');
        }
    }); //main-nav-dropdown

    $('.main-nav .opener').click(function () {
        if ($(this).parent().hasClass('opened')) {
            $(this).parent().removeClass('opened');
            $(this).siblings('ul').stop().slideUp(300);
        } else {
            $(this).parent().addClass('opened').siblings('.opened').removeClass('opened').children('ul').stop().slideUp(300);
            $(this).siblings('ul').stop().slideDown(300);
        };
        return false;
    }); //main-nav-accordion


    $('.visual-slider').slick({
        arrows: false,
        dots:true
    });
    
//bg-img
	$('.bg-img').each(function (e) {
		var bg = 'url(' + $(this).find('> img').attr('src') + ')';
		$(this).css('background-image', bg);
	});
    
    $('.block-img-block').each(function (e) {
		var bg = 'url(' + $(this).find('> img').attr('src') + ')';
		$(this).css('background-image', bg);
	});
    
    
    //mobile-menu
	$('<a href="#" class="open-menu"><span></span><span></span><span></span>Open Menu</a>').appendTo('#wrapper');
	$('<span class="fader"/>').appendTo('#wrapper');
	$('.open-menu').click(function () {
		$('body').toggleClass('menu-opened');
		return false;
	});
	$('.fader').click(function () {
		$('body').removeClass('menu-opened');
	});
    

})
