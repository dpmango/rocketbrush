$(document).ready(function(){

 	// Prevent # behavior
	$('[href="#"]').click(function(e) {
		e.preventDefault();
	});

  var scene = $('.js-scene').get(0)

  var parallax = new Parallax(scene);

  // $('.footer-face').hover(function(){
  //   toggleFaceDesc( $(this).data('id') )
  // }, function(){
  //   toggleFaceDesc( )
  // })
  //
  // function toggleFaceDesc(el){
  //   $('.footer-face_desc').removeClass('is-active')
  //   if ( el ){
  //     $('.footer-face_desc[data-id='+el+']').addClass('is-active')
  //   }
  // }
});

$(window).on('load', function(){
  $('body').addClass('is-ready');
})
