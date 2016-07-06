// Let's build the four objects
var bio = {
    name: "Stanley Lau",
    role: "Front-end developer",
    contacts: {
        mobile: "+8618819105993",
        email: "stanleyyylau@gmail.com",
        github: "stanleyyylau",
        twitter: "stanleyyylau",
        location: "Dongguan, China"
    },
    welcomeMessage: "Passion and perseverance keeps me learning, exploring new things and stay on the cutting edge of new technology",
    skills: ["HTML5 & CSS3", "JavaScript", "jQuery", "Bootstrap", "KnockoutJS", "jasmineJS", "Github"],
    biopic: "https://avatars2.githubusercontent.com/u/16324279?v=3&s=460",
    display: function() {
            // Below code is all about displaying bio
            var formatedRole = HTMLheaderRole.replace("%data%", bio.role);
            $("#header").prepend(formatedRole);
            var formatedName = HTMLheaderName.replace("%data%", bio.name);
            $("#header").prepend(formatedName);
            var contactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            var contactEmail = HTMLemail.replace("%data%", bio.contacts.email);
            var contactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
            var contactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            var contactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
            $("#topContacts").append(contactMobile);
            $("#topContacts").append(contactEmail);
            $("#topContacts").append(contactGithub);
            $("#topContacts").append(contactTwitter);
            $("#topContacts").append(contactLocation);
            var formatedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
            $("#header").append(formatedBioPic);
            var formatedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
            $("#header").append(formatedWelcomeMsg);
            $("#header").append(HTMLskillsStart);
            //let's deal with footer contact
            var footercontactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            var footercontactEmail = HTMLemail.replace("%data%", bio.contacts.email);
            var footercontactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
            var footercontactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            var footercontactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
            $("#footerContacts").append(footercontactMobile);
            $("#footerContacts").append(footercontactEmail);
            $("#footerContacts").append(footercontactGithub);
            $("#footerContacts").append(footercontactTwitter);
            $("#footerContacts").append(footercontactLocation);
            // I'm done repeating myself, I will append all skills using IIFE
            (function appendSkill() {
                var skillset = "";
                for (var i = 0; i < bio.skills.length; i++) {
                    var skillTemp = HTMLskills.replace("%data%", bio.skills[i]);
                    skillset += skillTemp;
                }
                $("#header").append(skillset);
            })();
        } //end display function
};

var education = {
    schools: [
     {
        name: "Omeida English Colleage",
        location: "GuangXi, China",
        degree: "Graduate",
        majors: ["Business English", "oral Egnlish"],
        dates: "2013-01-15",
        url: "http://www.omeida.com"
    }, {
        name: "Free Code Camp",
        location: "Online",
        degree: "Graduate",
        majors: ["Front-end development", "Back-end development"],
        dates: "2016-01-15",
        url: "http://www.freecodecamp.com"
    }, {
        name: "Udacity Front-end nano degree",
        location: "Online",
        degree: "In-progress",
        majors: ["Front-end development"],
        dates: "2016-05-28",
        url: "http://www.udacity.com"
    }],
    onlineCourses: [
    {
        title: "HTML and CSS",
        school: "CodeSchool",
        date: "2016-02-18",
        url: "http://www.codeshool.com"
    }, {
        title: "Practical Javascript",
        school: "Watch and code",
        date: "2016-05-5",
        url: "http://www.watchandcode.com"
    }, {
        title: "Understanding the weird parts of JS",
        school: "Udemy",
        date: "2016-07-5",
        url: "http://www.udemy.com"
    }],
    display: function() {
            $("#education").append(HTMLschoolStart);
            for (var i = 0; i < education.schools.length; i++) {
                var formatedSchooName = HTMLschoolName.replace("%data%", education.schools[i].name);
                var formatedSchooDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                formatedSchooName += formatedSchooDegree;
                var formatedSchooDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                var formatedSchooLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
                var formatedSchooMajors = "";
                for (var t = 0; t < education.schools[i].majors.length; t++) {
                    formatedSchooMajors += HTMLschoolMajor.replace("%data%", education.schools[i].majors[t]);
                }
                $(".education-entry").append(formatedSchooName);
                // $(".education-entry").append(formatedSchooDegree);
                $(".education-entry").append(formatedSchooDates);
                $(".education-entry").append(formatedSchooLocation);
                $(".education-entry").append(formatedSchooMajors);
            }

            //let's deal with online course
            $(".education-entry").append(HTMLonlineClasses);
            for (var ii = 0; ii < education.onlineCourses.length; ii++) {
                var formatedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[ii].title);
                var formatedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[ii].school);
                formatedOnlineTitle += formatedOnlineSchool;
                var formatedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[ii].date);
                var formatedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[ii].url);
                $(".education-entry").append(formatedOnlineTitle);
                // $(".education-entry").append(formatedOnlineSchool);
                $(".education-entry").append(formatedOnlineDates);
                $(".education-entry").append(formatedOnlineUrl);
            } //end for
        } //end function
}; //end education object

var work = {
    jobs: [{
        employer: "Winpin Tech",
        title: "Online Marketing Specialist",
        location: "Dongguan China",
        dates: "2014",
        description: "Provide strategic marketing advice and implement them</br>analyse and optimise winpin's google Adwords account</br>Successfully acquire 25 quality leads within a month for the company"
    }, {
        employer: "Simproit",
        title: "Marketing Director",
        location: "Dongguan China",
        dates: "2015",
        description: "Build and maintain Wordpress-based websites for client</br>Create and manage google Adwords accounts for clients</br>Responsible for overseas technical outsource and document translation"
    }],
    display: function() {
        $("#workExperience").append(HTMLworkStart);
        for (var i = 0; i < work.jobs.length; i++) {
            var formatedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formatedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            formatedWorkEmployer += formatedWorkTitle;
            var formatedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formatedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formatedWorkDes = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry").append(formatedWorkEmployer);
            $(".work-entry").append(formatedWorkDates);
            $(".work-entry").append(formatedWorkLocation);
            $(".work-entry").append(formatedWorkDes);
        } //end for loop
    }
};

var projects = {
    projects: [{
        title: "Build A Map with Google API",
        link: "https://stanleyyylau.github.io/projects/map-project",
        dates: "2016",
        description: "build an app with KnockoutJS that shows a map and markers for different locations, when marker is clicked, window is popped up with info about that location.",
        images: ["https://stanleyyylau.github.io/projects/img/map%20project.png"]
    }, {
        title: "Build a Simon Game",
        link: "https://stanleyyylau.github.io/projects/simon-game",
        dates: "2016",
        description: "build an app that resembles the tradition Simon Game and user can choose to play regular or strict mode. Two second countdown limit are also implemented.",
        images: ["https://stanleyyylau.github.io/projects/img/simon%20game.png"]
    }, {
    	title: "Build a Tic Tac Toe Game",
    	dates: "2016",
    	link: "https://stanleyyylau.github.io/projects/tic-tac-toe",
    	description: "build the tradition Tic Tac Toe game in vanilla Javascript, user can choose to play X or Y and the game will resume ever time a player win or lose.",
    	images: ["https://stanleyyylau.github.io/projects/img/tic%20tac%20tow.png"]
    }, {
    	title: "Build a JavaScript Calculator",
    	link: "https://stanleyyylau.github.io/projects/js-calculator",
    	dates: "2016",
    	description: "build a calculator app with vanilla javascript",
    	images: ["https://stanleyyylau.github.io/projects/img/calculator.png"]
    },{
    	title: "Use the Twitchtv JSON API",
    	link: "https://stanleyyylau.github.io/projects/twichtv-json",
    	dates: "2016",
    	description: "built an app that retrieves data from Twichtv's API and display channel information and status, also provides a function for users to filter between online, offline and all.",
    	images: ["https://stanleyyylau.github.io/projects/img/twittch%20tv.png"]
    }, {
    	title: "Build a Pomodoro Clock",
    	link: "https://stanleyyylau.github.io/projects/pomodoro-clock",
    	dates: "2016",
    	description: "build a pomodoro clock that has a 5 minutes default break on every 25-minutes section, users can also customise break and section length.",
    	images: ["https://stanleyyylau.github.io/projects/img/the%20clock.png"]
    }, {
    	title: "Online Work Portfolio",
    	link: "https://stanleyyylau.github.io/projects/portfolio-fcc/",
    	dates: "2016",
    	description: "Due to the limitation of this webpage, I can't show all of my projects here, Please visit 'www.stanleyyylau.github.io/projects' for more of my projects",
    	images: ["https://stanleyyylau.github.io/projects/img/portfolio.png"]
    }],
    display: function() {
        $("#projects").append(HTMLprojectStart);
        for (var i = 0; i < projects.projects.length; i++) {
            var formatedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            	formatedTitle = formatedTitle.replace("#", projects.projects[i].link);
            var formatedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            // formatedWorkEmployer += formatedWorkTitle;
            var formatedDes = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            var formatedImg = "";
            for (var t = 0; t < projects.projects[i].images.length; t++) {
                formatedImg += HTMLprojectImage.replace("%data%", projects.projects[i].images[t]);
            }
            $(".project-entry").append(formatedTitle);
            $(".project-entry").append(formatedDates);
            $(".project-entry").append(formatedDes);
            $(".project-entry").append(formatedImg);
        } //end for loop
    }
};


//let's call those functions and add maps
projects.display();
work.display();
education.display();
bio.display();
$("#mapDiv").append(googleMap);
