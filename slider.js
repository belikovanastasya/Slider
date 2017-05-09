function Slider(number, speed) {
	this.number = number;
	this.speed = speed;
}
Slider.prototype.move = function(){
	var nav = $('.nav li');
	var slide = $('.slider-items')
	var self = this;
	nav.click(function(){
		var currentNav = $(this).attr('data-toggle');
		var currentSlide = $('.slider-items li')[currentNav];
		$(this).addClass('active').siblings().removeClass('active');
		$(currentSlide).fadeIn(self.speed).siblings().fadeOut(self.speed);
		
	})
}