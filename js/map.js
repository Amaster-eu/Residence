var MapView = {
    init: function() {
        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(55.73113069, 37.21850127),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true, //disables default controls so you can add your own back on
            styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#5b451d"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#624c25"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#5a451d"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#533f1c"
                }, {
                    "weight": 0.1
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#634e28"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#5a451d"
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#55411b"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#55411b"
                }]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#614c24"
                }]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#352811"
                }]
            }, {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#5a441d"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#5a441d"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#5a441d"
                }, {
                    "weight": 1.2
                }]
            }]
        };


        var that = this;


        this.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        var marker = new google.maps.Marker({
            position: {
                lat: 55.73109595,
                lng: 37.21849389
            },
            map: this.map,
            title: 'Резиденция',
            icon: 'img/rectangle.svg'
        });

        //Loads custom zoom controls
        var zoomDiv = document.createElement('div');
        var renderZoomControls = new ZoomControl(zoomDiv, this.map);
        zoomDiv.index = 1;
        this.map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomDiv);

    }
}


function ZoomControl(div, map) {

    // Get the control DIV. We'll attach our control UI to this DIV.
    var controlDiv = div;

    // Set CSS for the controls.
    controlDiv.style.margin = '28px 0px 0px 22px';
    controlDiv.style.cursor = 'pointer';
    controlDiv.style.height = '96px';
    controlDiv.style.width = '38px';
    controlDiv.style.marginTop = '-10px';
    controlDiv.style.marginRight = '98px';

    var zoomin = document.createElement('div');
    zoomin.title = 'Увеличить';
    controlDiv.appendChild(zoomin);

    var zoominText = document.createElement('div');
    zoominText.innerHTML = '<svg width="38px" height="38px" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><circle fill="#c29a5c" cx="19" cy="19" r="19"></circle><path d="M26.151002,12.848998 L12.4286623,26.5713377" stroke="#FFFFFF" stroke-linecap="square" transform="translate(19.500000, 19.500000) rotate(45.000000) translate(-19.500000, -19.500000) "></path><path d="M19,28.9059372 L19,9.49961833" stroke="#FFFFFF" stroke-linecap="square"></path></svg>';
    zoominText.style.marginBottom = '20px';
    zoomin.appendChild(zoominText);

    var zoomout = document.createElement('div');
    zoomout.title = 'Уменьшить';
    zoomout.style.display = "iblock"
    controlDiv.appendChild(zoomout);

    var zoomoutText = document.createElement('div');
    zoomoutText.innerHTML = '<svg width="38px" height="38px" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><circle fill="#c29a5c" cx="19" cy="19" r="19"></circle><path d="M26.151002,12.848998 L12.4286623,26.5713377" stroke="#FFFFFF" stroke-linecap="square" transform="translate(19.500000, 19.500000) rotate(45.000000) translate(-19.500000, -19.500000) "></path></svg>';
    zoomout.appendChild(zoomoutText);

    // Setup the click event listeners for zoom-in, zoom-out:
    google.maps.event.addDomListener(zoomout, 'click', function() {
        var currentZoomLevel = map.getZoom();
        if (currentZoomLevel != 0) {
            map.setZoom(currentZoomLevel - 1);
        }
    });

    google.maps.event.addDomListener(zoomin, 'click', function() {
        var currentZoomLevel = map.getZoom();
        if (currentZoomLevel != 21) {
            map.setZoom(currentZoomLevel + 1);
        }
    });
}

MapView.init();
