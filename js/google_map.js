function initMap() {
		var myLatLng = {lat: 48.19155, lng: 17.73201};

		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 14,
			center: myLatLng
		});

		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'Hello World!'
		});
	}
