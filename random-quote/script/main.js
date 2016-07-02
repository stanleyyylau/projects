var model = {
    randomQuote: "Click 'New Quote' button to generate your first random quote...",
    themes: ["theme-0", "theme-1", "theme-2", "theme-3", "theme-4", "theme-5"],
    lastThemeNumber: 0
};

var view = {
    init: function() {
        view.displayNewQuote();
    },
    displayNewQuote: function() {
        $("#toReplace").html(model.randomQuote);
    },
    changeTheme: function(className) {
        $("html").removeClass("theme-0 theme-1 theme-2 theme-3 theme-4 theme-5");

        // var timeoutID = window.setTimeout(function(){
        $("blockquote").removeClass("no-opa");
        $("html").addClass(className);
        // }, 500);

    }
};

var handler = {
    getNewQuote: function() {
        var num;
        $("blockquote").addClass("no-opa");
        $.getJSON("http://api.adviceslip.com/advice", function(a) {
            model.randomQuote = a.slip.advice;
            view.displayNewQuote();
            // this do while is to make sure the theme is different everytime button is clicked
            do {
                num = Math.floor(Math.random() * 6);
            } while (model.lastThemeNumber == num);
            // to remember the current theme, to avoid the same theme next time
            model.lastThemeNumber = num;
            view.changeTheme(model.themes[num]);
        }); //end getJSON
    },
    tweetThis: function() {
        event.preventDefault();
        var url = "https://twitter.com/intent/tweet?text=" + model.randomQuote;
        window.open(url, 'newwindow');
    }
};

view.init();
