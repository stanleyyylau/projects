// Let's build the four objects
var bio = {
    name: "Stanley Lau",
    role: "Front-end developer",
    contacts: {
        mobile: "+8618819105993",
        email: "stanleyyylau@gmail.com",
        github: "stanleyyylau",
        twitter: "stanleyyylau",
        location: "China"
    },
    welcomeMessage: "Awesome self-taught front-end developer",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    biopic: "https://placekitten.com/30/30",
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
    schools: [{
        name: "Free Code Camp",
        location: "USA",
        degree: "Bachelor",
        majors: ["Front-end development", "Back-end development"],
        dates: "2016-01-15",
        url: "http://www.freecodecamp.com"
    }, {
        name: "Omeida English Colleage",
        location: "China",
        degree: "Bachelor",
        majors: ["Business English", "oral Egnlish"],
        dates: "2013-01-15",
        url: "http://www.omeida.com"
    }],
    onlineCourses: [{
        title: "Udacity online course",
        school: "Udacity",
        date: "2016-05-26",
        url: "http://www.udacity.com"
    }, {
        title: "Udacity online course",
        school: "Udacity",
        date: "2016-05-26",
        url: "http://www.udacity.com"
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
        employer: "Simpro IT",
        title: "Growth Hacker",
        location: "Dongguan China",
        dates: "2015-05",
        description: "Where My responsibility is to conduct online marketing"
    }, {
        employer: "Facebook",
        title: "Front-end developer",
        location: "USA",
        dates: "2017-05",
        description: "Where My responsibility is to conduct online marketing"
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
        title: "JS Calculator",
        dates: "2016-05-01",
        description: "A very nice js Calculator created by me",
        images: ["http://placekitten.com/200/200", "http://placekitten.com/200/200", "http://placekitten.com/200/200"]
    }, {
        title: "Weather APP",
        dates: "2016-04-01",
        description: "A very nice js weather app created by me",
        images: ["http://placekitten.com/200/200", "http://placekitten.com/200/200"]
    }],
    display: function() {
        $("#projects").append(HTMLprojectStart);
        for (var i = 0; i < projects.projects.length; i++) {
            var formatedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
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
work.display();
projects.display();
education.display();
bio.display();
$("#mapDiv").append(googleMap);