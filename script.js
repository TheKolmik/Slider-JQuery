$(document).ready(function(){
	$('.next').click(function(){
		var pImage = $('.img.prvni');
		var pImageIndex = $('.img.prvni').index();
		var nextImageIndex = pImageIndex +1;
		var nextImage = $('.img').eq(nextImageIndex);
		pImage.fadeOut(900);
		pImage.removeClass('prvni');
		
		
		if(nextImageIndex ==  ($('.img:last').index()+1)){
			$('.img').eq(0).fadeIn(900);
			$('.img').eq(0).addClass('prvni');
			
		}
		
		else {
			nextImage.fadeIn(900);
			nextImage.addClass('prvni');
			
		}
		
	});
	
	
	$('.prev').click(function(){
		var pImage = $('.img.prvni');
		var pImageIndex = $('.img.prvni').index();
		var prevImageIndex = pImageIndex -1;
		var prevImage = $('.img').eq(prevImageIndex);	
		
		pImage.fadeOut(900);
		pImage.removeClass('prvni');
		prevImage.fadeIn(1000);
		prevImage.addClass('prvni');
		
	});
	
	
});