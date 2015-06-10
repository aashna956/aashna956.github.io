$(document).ready(function(){
	$('.intro-text').animate({opacity:1},4000);

	$(".uiuc-tile").hover(function() {
	$(".uiuc-tile").attr("src","img/uiuc2HOVER.jpg");
	},function()
	{
	$(".uiuc-tile").attr("src","img/uiuc22.jpg");
	});
	$(".about-me-tile").hover(function() {
	$(".about-me-tile").attr("src","img/HOV1.jpg");
	},function()
	{
	$(".about-me-tile").attr("src","img/aboutmetile.jpg");
	});
	$(".interests-tile").hover(function() {
	$(".interests-tile").attr("src","img/gemsHov.jpg");
	},function()
	{
	$(".interests-tile").attr("src","img/gemstile.jpg");
	});

	$(".link-one").click(function(){

        $('.uiucHalf').fadeOut(500);
		$('.interestsHalf').fadeOut(500);
		$('.aboutMeHalf').delay(500).fadeIn(500);


	});
	$(".link-two").click(function(){

        $('.aboutMeHalf').fadeOut(500);
		$('.interestsHalf').fadeOut(500);
		$('.uiucHalf').delay(500).fadeIn(500);
	});
	$(".link-three").click(function(){

	 	$('.aboutMeHalf').fadeOut(500);
		$('.uiucHalf').fadeOut(500);
		$('.interestsHalf').delay(500).fadeIn(500);

	 });

});
