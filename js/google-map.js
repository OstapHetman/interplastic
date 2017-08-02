function initMap() {
    // Map options
    var options = {
            zoom: 16,
            center: {
                lat: 56.378517,
                lng: 41.307161
            }
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
        icon: 'images/marker.png'
    });
}