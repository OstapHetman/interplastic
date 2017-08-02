function initMap() {
    // Map options
    var options = {
            zoom: 17,
            center: {
                lat: 56.378999,
                lng: 41.3097700
            },
            styles: [{
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ffec97"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#f7f1d9"
                    }]
                }
            ]

        }
        // New map
    var map = new
    google.maps.Map(document.getElementById('map'), options)

    // Add marker
    var marker = new google.maps.Marker({
        position: {
            lat: 56.378517,
            lng: 41.307161
        },
        map: map,
        icon: 'images/marker.png',
    });
}