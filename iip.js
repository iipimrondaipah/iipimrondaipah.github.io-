$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".sangat").slideToggle("medium");

	$('nav ul li.mati').each(function(index, el) {
		var sangatID = el.id.split('_')[1];
		$('.sangat#' + sangatID).hide();
	});
});

$('nav').delegate('.mati', 'click', function(event) {
	var pilihIsi = this.id.split('_')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.sangat:visible').fadeOut('medium', function() {
		$('.sangat#' + pilihIsi).fadeIn('medium');
	});

	var $this = $(this);
	$this.removeClass('mati').addClass("hidup");
    $this.siblings().addClass('mati').removeClass('hidup');

    });
});