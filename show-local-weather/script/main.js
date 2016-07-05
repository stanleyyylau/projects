var model = {
  locationInfo: {
    longitude: null,
    latitude: null,
  },
  weatherInfo: {
    cityName: "...",
    mainWeather: "...",
    temperature: "...",
    temperatureBy: "",
  },
  weatherAPI: {
    URL: "http://api.openweathermap.org/data/2.5/weather?",
    APPID: "ffe8dba918b955222526004c7bf9eb2d"
  }
}

var view = {
  updateInfo: function() {
    $('.main-temp').html(model.weatherInfo.temperature + " " + model.weatherInfo.temperatureBy);
    $('.location').html(model.weatherInfo.cityName);
    $('.main-weather').html(model.weatherInfo.mainWeather);
    // var icon = data.weather[0].icon;
    // var iconlink = "http://www.openweathermap.org/img/w/" + icon + ".png";
    // var showiconcode = '<img src="' + iconlink + '">';
    // $('#mainwea').append(showiconcode);
  }
}

var handler = {
  init: function() {
    view.updateInfo();
    handler.getLocation();
  },
  getLocation: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handler.gettingLocationOnSuccess);
    } else {
      alert('Your brower sucks in that in does not support geo location');
    }
  },
  gettingLocationOnSuccess: function(position) {
    model.locationInfo.longitude = position.coords.longitude;
    model.locationInfo.latitude = position.coords.latitude;
    model.locationInfo.longitude = Math.round(model.locationInfo.longitude);
    model.locationInfo.latitude = Math.round(model.locationInfo.latitude);
    var ajaxUrl = model.weatherAPI.URL + "lat=" + model.locationInfo.latitude + "&lon=" + model.locationInfo.longitude + "&APPID=" + model.weatherAPI.APPID;
    $.getJSON(ajaxUrl, function(data) {
      handler.getWeatherInfo(data);
    });
  },
  getWeatherInfo: function(data) {
    // var holdhtml = data.main.temp;
    // console.log(holdhtml);
    // $('#tempnumber').html(holdhtml);
    // $('#temptype').html("F");
    // $('#location').html(data.name);
    // $('#mainwea').html(data.weather[0].main);
    // var icon = data.weather[0].icon;
    // var iconlink = "http://www.openweathermap.org/img/w/" + icon + ".png";
    // var showiconcode = '<img src="' + iconlink + '">';
    // $('#mainwea').append(showiconcode);
    model.weatherInfo.temperatureBy = "f";
    model.weatherInfo.cityName = data.name;
    model.weatherInfo.temperature = data.main.temp.toFixed(1);
    model.weatherInfo.mainWeather = data.weather[0].main;
    view.updateInfo();
  },
  convertoc: function() {

    if ($('.temp-toggle').html()==="Convert to C") {
      model.weatherInfo.temperature = model.weatherInfo.temperature / 33.8;
      model.weatherInfo.temperature = model.weatherInfo.temperature.toFixed(1);
      model.weatherInfo.temperatureBy = "c";
      view.updateInfo();
      $('.temp-toggle').html("Convert to F");
    }
    else if($('.temp-toggle').html()==="Convert to F"){
      model.weatherInfo.temperature = model.weatherInfo.temperature * 33.8;
      model.weatherInfo.temperature = model.weatherInfo.temperature.toFixed(1);
      model.weatherInfo.temperatureBy = "f";
      view.updateInfo();
      $('.temp-toggle').html("Convert to C");
    }

  },

}

$(document).ready(function() {
  handler.init();
  $(".temp-toggle").click(function() {
    handler.convertoc();
  });

});
