// The this all my favarite moving locations app will load these location by default
// in other words, the model
var locations = [{
    name: "Guangzhou",
    lon: 23.1253503,
    lat: 112.9476504,
}, {
    name: "Dongguan",
    lon: 22.9759527,
    lat: 113.5141329,
}, {
    name: "Shenzhen",
    lon: 22.5549176,
    lat: 113.7736848,
}, {
    name: "Hong Kong",
    lon: 22.3574372,
    lat: 113.8408191,
}, {
    name: "Foshan",
    lon: 23.0087696,
    lat: 112.9662218,
}, {
    name: "Chang An",
    lon: 22.8141374,
    lat: 113.7936452,
}];
var map;
var marker = [];
var infowindow;



// The function for initilization the google map and other function,
// you call surely call this the view, because it initilize everything you set, kind of...
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: locations[0].lon,
            lng: locations[0].lat
        },
        zoom: 8
    });
    infowindow = new google.maps.InfoWindow({
        content: '<div class="info">loading...</div>'
    });

    // I'm making this function for marker click because JShint.com don't recommend making a function
    // inside a for loop
    markerClick = function() {
        AppViewModel.showInfo(this);
    };
    //let's loop through the array to add location and marks and info and event listener
    for (var i = 0; i < AppViewModel.allLocations().length; i++) {
        marker[i] = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            position: {
                lat: locations[i].lon,
                lng: locations[i].lat
            }
        });
        google.maps.event.addListener(marker[i], 'click', markerClick);
    }
}

//error handling for google maps
function googleError() {
    if (typeof $ == "object") {
        $("#map").html("Fail to load Google maps");
    } else {
        document.getElementById("map").innerHTML = '<div class="fail-google">Fail to load Google maps...</div>';
    }
}

// A fucntion to handle marker boucing when clicked
function toggleBounce(marker) {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        window.setTimeout(function() {
            marker.setAnimation(null);
        }, 2000);
    }
}



//this is the KO part for MVVM pattern
//in other words, the ViewModel
var AppViewModel = {
    allLocations: ko.observableArray(locations),
    //when locations in the list view is clicked
    locationClicked: function(location) {
        // actually we don't need to set map center to move the map, google map is smart enough to handle that moving part
        // indentify which index of location is being clicked
        var index;
        for (var i = 0; i < locations.length; i++) {
            if (locations[i].name === location.name) {
                index = i;
            }
        }
        AppViewModel.showInfo(marker[index]);
    },
    showInfo: function(marker) {
        toggleBounce(marker);
        infowindow.open(map, marker);
        // here comes the ajax part
        // we first get the name of the city that's being clicked, and send the request to wiki's api
        var requestCity;
        for (var i = 0; i < locations.length; i++) {
            if (marker.position.lat().toFixed(5) == locations[i].lon.toFixed(5) && marker.position.lng().toFixed(5) == locations[i].lat.toFixed(5)) {
                requestCity = locations[i].name;
            }
        }
        //console.log just to make sure we get the correct city name, and then concatenate to wiki api endpoint
        console.log(requestCity);
        var wikiUrl = "https://en.wikipedia.org/w/api.php?callback=?&action=opensearch&limit=20&namespace=0&format=json&search=" + requestCity;
        // I use jQuery for ajax call, notice here I did not use success and error,
        //which are depreated and note considered best practices by latest jQuery version.
        $.ajax({
            url: wikiUrl,
            dataType: "jsonp"
        }).done(function(data) {
            var result = $(".info");
            result.html("");
            if (data[1].length === 0) {
                result.html("No content related to this city");
            } else {
                var statusHTML = '<ul>';
                for (var i = 0; i < 3; i++) {
                    // i'm only gonna append three wiki articles into the info window, no more, mo less
                    if (data[3][i]) {
                        statusHTML += '<Li><a href="' + data[3][i] + '" target="_blank"><h1>' + data[1][i] + '</h1></a><p>' + data[2][i] + '</p></li>';
                    }
                }
                statusHTML += '</ul>';
                result.html(statusHTML);
            }
        }).fail(function() {
            $(".info").html("Fail to load wiki content");
        });

    },
    //now let's handle the search filter function
    query: ko.observable(''),
    search: function(value) {
        // remove all the current locations, which removes them from the view
        AppViewModel.allLocations([]);
        // remove all marker now, than add them back
        for (var ii = 0; ii < marker.length; ii++) {
            marker[ii].setMap(null);
        }
        console.log(value);
        for (var x in locations) {
            if (locations[x].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                AppViewModel.allLocations.push(locations[x]);
                marker[x].setMap(map);
            }
        }
    }
};

// Activates knockout.js
ko.applyBindings(AppViewModel);
AppViewModel.query.subscribe(AppViewModel.search);
