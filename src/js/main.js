$(document).ready(function(){

 	// Prevent # behavior
	$('[href="#"]').click(function(e) {
		e.preventDefault();
	});

  var scene = $('.js-scene').get(0)

  // var parallax = new Parallax(scene);

  $('.footer-face').hover(function(){
    // on
    toggleFaceDesc( $(this).data('id') )
  }, function(){
    // out
    toggleFaceDesc( )
  })

  function toggleFaceDesc(el){
    console.log(el)
    $('.footer-face_desc').removeClass('is-active')
    // if id is provided
    if ( el ){
      $('.footer-face_desc[data-id='+el+']').addClass('is-active')
    }

  }
});

$(window).on('load', function(){
  $('body').addClass('is-ready');
})
