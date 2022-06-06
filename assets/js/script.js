//animação scroll
$('header a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('header').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

$('.seta-home a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('.seta-home').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

