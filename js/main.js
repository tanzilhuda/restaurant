$(document).ready(function(){
	/* ========== Background image height equal to the browser height.==========*/
	$('#section1').css({ 'height': $(window).height() });
  	$(window).on('resize', function() {
        $('#section1').css({ 'height': $(window).height() });
  	 });
});




/*============================== #carousel-slider ==============================*/
$(document).ready(function(){
	$("#carousel-slider").owlCarousel({
		singleItem:true,
		///autoPlay:3000,
	});
});


$(document).ready(function(){
	$("#slider").owlCarousel({
		itemsDesktop:	[1199,3],
		items: 	3,
		//autoPlay:3000,
		navigation:true,
		pagination:false,
		navigationText: 	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});
});




/*============= hash link/ navigation scroll =====================*/
$(window).scroll(function(event) {
	Scroll();
});

$(' a').on('click', function() {  
	$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
	return false;
});



/*==========================
     back to top js
-----------------------------*/
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});









