/*var $vid = $('video','#container');
var $msg = $('#custom-message'); 
$msg.css({
    top:$vid.offset().top + (($vid.height()/2) - ($msg.height()/2)),
    left:$vid.offset().left + (($vid.width()/2) - ($msg.width()/2))
}); */

$('#myCarousel').bind('slid', function (e) {
    $('video').get(0).play()
    });

/*
$("#video").on('slid.bs.carousel', function (e) {
 $("#video .video").empty();
 $("#video .item.active").addClass('animated fadeIn');
 $("#video #vid-1.active .video").append('<video muted loop autoplay class="media-player" src="videos/4696286.mp4" id="fast"><source src="videos/4696286.mp4" type="video/mp4"></source></video>');
 $("#video #vid-2.active .video").append('<video muted loop autoplay class="media-player" src="videos/7883158.mp4" id="fast"><source src="videos/7883158.mp4" type="video/mp4"></source></video>');
 $("#video #vid-3.active .video").append('<video muted loop autoplay class="media-player" src="videos/8075803.mp4" id="fast"><source src="videos/8075803.mp4" type="video/mp4"></source></video>');
 $("#video #vid-4.active .video").append('<video muted loop autoplay class="media-player" src="videos/1138051.mp4" id="fast"><source src="videos/1138051.mp4" type="video/mp4"></source></video>');
 $("#video #vid-5.active .video").append('<video muted loop autoplay class="media-player" src="videos/1675216.mp4" id="fast"><source src="videos/1675216.mp4" type="video/mp4"></source></video>');
});
*/