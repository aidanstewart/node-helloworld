var locations = [
    [
        "Moss Street Market, 1330 Fairfield Road",
       48.414934, -123.347613
    ],
    [
    		"James Bay Community Market, 494 Superior Street",
        48.418192, -123.372763
    ],
    [
        "Esquimalt Farmer's Market, 500 Park Place",
     	48.429420, -123.415269
    ]
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: new google.maps.LatLng(48.420743, -123.370197),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });


    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

    }

