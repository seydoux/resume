/*  create bio object with correct info, skills is a variable length array */
var bio = {
    "name": "Marie-Isabelle Seydoux",
    "role": "Web Developer/Bioinformatician",
    "contacts": {
        "mobile": "610-329-1492",
        "email": "seydouxMIB@gmail.com",
        "github": ["seydoux", "#"],
        "location": "West Chester, PA"
    },
    "welcomeMessage": "Welcome to my resume!",
    "skills": ["Skills: ", "python", "perl", "Java", "R", "HTML", "CSS", "Linux/Unix", "mySQL"],
    "biopic": "http://i.imgur.com/vGN6jpF.jpg?1"    
};
// end of bio object

/* Bio Display function */
bio.display = function() {
    	// format bio objects
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedConactInfo = [];
        formattedConactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
        formattedConactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
        formattedConactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github[0]));
        formattedConactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#topContacts").append(formattedConactInfo);
        $("#footerContacts").append(formattedConactInfo);

        // output formatted name/role info to the header section of the html
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        /*
        // walk through all of the contact info as we may not include every type of contact info
        for (contact in bio.contacts) {
            var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);
            // output contact to the corresponding html sections
            // in this case, we want contact info displayed at both the top and the bottom of the resume
            $("#topContacts").append(formattedContact);
            $("#footerContacts").append(formattedContact);
        } // end of for loop
        */
        //output picture and welcome message to the header
        $("#header").append(formattedBiopic);
        //$("#header").append(formattedWelcomeMsg);
        // since skill length is variable, we walk through all of the elements in the list
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (item in bio.skills) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[item]);
                // output skill to the header
                $("#skills").append(formattedSkill);
            } // end of for loop
        } // end of if statement
    } // end of display function for bio object

/* create work object where jobs is a variable length array */
var work = {
	"jobs" : [
		{
			"employer" : "Virginia Commonwealth University",
			"title" : "Teaching Assistant",
			"location" : "Richmond, VA",
			"dates" : "August 2013 - December 2013",
			"description" : "Introduced students to bioinformatics concepts, beginning python programming, programming logic, and evaluated student projects",
		},
		{
			"employer" : "Virginia Commonwealth University",
			"title" : "Teaching Assistant",
			"location" : "Richmond, VA",
			"dates" : "January 2013 - May 2013",
			"description" : "Assisted students in learning about bacterial viruses, their genetic structure, and in identifying  potential gene functions",
		},
		{
			"employer" : "St. Edward's University",
			"title" : "Teaching Assistant",
			"location" : "Austin, TX",
			"dates" : "January 2010 - May 2010",
			"description" : "Assisted students is learning how to annotate and assemble Drosphila sp. fosmid sequences",
		}
	]
};
/* end work object */

/* Function for displaying work information 
	Will first start work experience format and then format data in work object to display */
work.display= function () {
	
    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedEmployerTitle = formattedEmployer + formattedTitle
        // output info
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    } // end of for loop    
}//end of function	

/* create education object with array of school and array of online courses */
var education = {
    "schools": [
        {"name": "Virginia Commonwealth University",
            "location": "Richmond, VA",
            "major": "Bioinformatics",
            "degree": "~MS",
            "dates": "2012-2014",
            "url": "www.vcu.edu"
        },
        {"name": "St. Edward's University",
            "location": "Austin, TX",
            "major": "Bioinformatics",
            "degree": "BS",
            "dates": "2006-2011",
            "url": "www.stedwards.edu/"
        }
    ],
    "onlineCourses": [
        {"title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "August 2015",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
         {"title": "Data Analyst Nanodegree",
            "school": "Udacity",
            "dates": "August 2015",
            "url": "https://www.udacity.com/course/data-analyst-nanodegree--nd002"
        }
    ]
 };
/* end education object */

/* display function for education items 
	walk through schools array to display everything*/
education.display = function(){
	/*walk through school array */
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolNameDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
    } /* end of for loop */

    for(course in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedOnlineTitleSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        } /* end of online courses loop */
} /* end of display */

/* create project object */
var projects = {
    "projects": [
        {"title": "Project 1",
            "dates": "2014",
            "description": "First Project",
            "images": ["http://i.imgur.com/kxnCj.jpg"]
        },
        {"title": "Project 2",
            "dates": "2015",
            "description": "Second Project",
            "images": ["http://i.imgur.com/Wn091.jpg"]
        }
    ]
};
/* end of projects object */

/* display functions for projects
	just a placeholder for now, need to fill in with real project info */
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (url in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[url]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
/* end of projects display function */

bio.display();
work.display();
education.display();
projects.display();

/* keep track of user clicks 
$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY); 
});
moved to helper.js
*/

/* keep track of all locations 
function locationizer() {
	var locationArray = [];

	for (job in work.jobs) {
		locationArray.push(work.jobs[job].location);
	}

	for (school in education.schools) {
		locationArray.push(education.schools[school].location);
	}

	locationArray.push(bio.contacts.location);

	return locationArray;
}

also moved to help.js
 end of locationizer */


$('#main').append(internationalizeButton);
/* international name */
function inName(name) {
	name = name.split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCaser();

	return name[0] + " " + name[1];
}

/* add google map to resume */
$("#mapDiv").append(googleMap);