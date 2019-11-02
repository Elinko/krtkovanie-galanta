$(document).ready(function() {
	$('.video-section').click(function() {
		console.log('clicked');
		var videoId = $(this).attr('id');
		$(this).replaceWith(embed(videoId));
		$('.video-player').height(($('.video-player').width() * 0.6))
	});




});

function embed(id) {
	embedCode = '<iframe allowFullScreen allowTransparency="true" class="video-player"' +
	'frameborder="0" height="432" id="vzvd-' + id + '" mozallowfullscreen' +
	'name="vzvd-' + id + '" src="videos/krtkovanie-galanta-video.mp4"' + id + '/player?autoplay=true"' +
	'title="video player" type="text/html" webkitAllowFullScreen width="768"></iframe>';
	return embedCode;
}
