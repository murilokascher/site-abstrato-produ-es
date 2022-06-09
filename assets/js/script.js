//animação scroll
$('header a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset
	}, 500);
});

$('footer a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset
	}, 500);
});

$('.seta-home a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset
	}, 500);
});

//menu fixo com background
(function () {
    var menu = document.getElementById('background-fixo'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) menu.classList.add('header-fundo-fixo'); // > 0 ou outro valor desejado
        else menu.classList.remove('header-fundo-fixo');
    });
})();