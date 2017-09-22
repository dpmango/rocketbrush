$(document).ready(function(){

 	// Prevent # behavior
	$('[href="#"]').click(function(e) {
		e.preventDefault();
	});

  var scene = $('.js-scene').get(0)

  var parallax = new Parallax(scene);

});

$(window).on('load', function(){
  $('body').addClass('is-ready');
})
