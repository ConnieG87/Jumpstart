$(document).ready(function () {
	console.log("slick");
	$('.carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		arrows: false,
		draggable: false,
		pauseOnHover: false,
		pauseOnFocus: false
	});

	var curPos = 0;
	var navHeight = parseInt($('.navbar').css('height'));
	var navHidden = false;

	$( window ).scroll(function() {

		var newPos = $(this).scrollTop();

		if (newPos > (curPos + navHeight)) {
			if (!navHidden) {
				$('.navbar').animate({top: '-' + navHeight}, 150);
				navHidden = true;
			}
			curPos = newPos;
		}
		else if (curPos > (newPos + navHeight)) {
			if (navHidden) {
				$('.navbar').animate({top: 0}, 150);
				navHidden = false;
			}
			curPos = newPos;
		}

	});
});



