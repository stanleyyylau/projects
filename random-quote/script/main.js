var model = {
  randomQuote: "Click 'New Quote' button to generate your first random quote..."
};

var view = {
  init: function() {
    view.displayNewQuote();
  },
  displayNewQuote: function() {
    $("#toReplace").html(model.randomQuote);
  }
}

var handler = {
  getNewQuote: function() {
    console.log('hello,quote');
    $.getJSON("http://api.adviceslip.com/advice", function(a) {
      model.randomQuote = a.slip.advice;
      view.displayNewQuote();
    }); //end getJSON
  },
  tweetThis: function() {
    event.preventDefault();
    var url = "https://twitter.com/intent/tweet?text=" + model.randomQuote;
    window.open(url, 'newwindow');
  }
}

view.init();
