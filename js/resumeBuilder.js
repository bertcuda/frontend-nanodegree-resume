/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Bio data
var bio = {
  "name": "Bert Ciccone",
  "role": "Technical Product Manager",
  "contacts": {
    "mobile": "310-463-2649",
    "email": "bertfciccone@gmail.com",
    "github": "https://github.com/bertcuda",
    "twitter": "@bertctweets",
    "location": "San Francisco"
  },
  "welcomeMessage": "Leading successful launches of innovative technologies and products.",
  "skills": [
    "Product Management", "HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"
  ],
  "bioPic": "http://placehold.it/200x200"
};

console.log(bio);

// Work data
var work = {
  "jobs": [{
    "employer": "HP",
    "title": "Business System Analyst/Technical Product Manager",
    "location": "Palo Alto, California",
    "dates": "July, 2013 to present",
    "description": "Lead development and launch of web, mobile and enterprise applications, working closely with marketng product managers, vendors and Scrum development teams creating infrastructure, systems and applications that drive HP computer, web and mobile marketing initiatves."
  }, {
    "employer": "Tyco",
    "title": "Program Manager/Business System Analyst",
    "location": "Irvine/San Francisco, California",
    "dates": "January, 2009 to June, 2013",
    "description": "Introduced RFID Internet of Things (IoT) technology solutions into top domestic and international companies including Inditex/Zara, Macy’s and others, resulting in successful, revenue-generting customer engagements. Help customers achieve significant business process innovation and increased sales."
  }, {
    "employer": "Razorfish",
    "title": "Business System Analyst",
    "location": "Los Angeles, California",
    "dates": "April, 2004 to November, 20008",
    "description": "In a top-tier interactive agency, managed innovative consumer web applications for leading brands including Choice Hotels, DIRECTV, Disney, Intel, Toyota and Yahoo!, resulting in successful product launches that enhanced customer engagement, improved operational effectiveness and increased sales."
  }]
};

console.log(work);

// Project data
var projects = {
  "projects": [{
    "title": "Project Portfolio",
    "dates": "August, 2016",
    "description": "Framework for a portfolio of projects demonstrating skilled application of web development technologies.",
    "images": [
      "http://placehold.it/200x200",
      "http://placehold.it/200x200"
    ]
  }, {
    "title": "Online Resume",
    "dates": "September, 2016",
    "description": "Interactive resume introducng Bert Ciccone to prospective employers.",
    "images": [
      "http://placehold.it/200x200",
      "http://placehold.it/200x200"
    ]
  }]
}

console.log(projects);

// Education and online course data
var education = {
  "schools": [{
    "name": "University of Southern California",
    "location": "Los Angeles, California",
    "degree": "MBA",
    "majors": ["Information Systems", "Entrepreneurship"],
    "dates": "",
    "url": "http://usc.edu"
  }, {
    "name": "California State University",
    "location": "Northridge, California",
    "degree": "BS",
    "majors": ["Computer Science"],
    "dates": "",
    "url": "http://csun.edu"
  }],
  "onlineCourses": [{
    "title": "Intro to HTML and CSS",
    "school": "Udacity",
    "dates": "August, 2016",
    "url": "http://udacity.com"
  }, {
    "title": "Responsive Web Design Fundamentals",
    "school": "Udacity",
    "dates": "August, 2016",
    "url": "http://udacity.com"
  }]
};

console.log(education);

bio.display = function () {

  // Format the Bio
  $("#header").prepend([HTMLheaderRole.replace("%data%", bio.role)]);
  $("#header").prepend([HTMLheaderName.replace("%data%", bio.name)]);

  $("#topContacts").append([HTMLmobile.replace("%data%", bio.contacts.mobile)]);
  $("#topContacts").append([HTMLemail.replace("%data%", bio.contacts.email)]);
  $("#topContacts").append([HTMLgithub.replace("%data%", bio.contacts.github)]);
  $("#topContacts").append([HTMLtwitter.replace("%data%", bio.contacts.twitter)]);
  $("#topContacts").append([HTMLlocation.replace("%data%", bio.contacts.location)]);

  $("#header").append([HTMLbioPic.replace("%data%", bio.bioPic)]);
  $("#header").append([HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)]);

  if (bio.skills) {
    $("#header").append([HTMLskillsStart.replace("%data%", bio.skills)]);
    for (var iSkill in bio.skills) {
      $("#skills").append([HTMLskills.replace("%data%", bio.skills[iSkill])]);
    }
  }

}

bio.display();

// Format the Work

work.display = function () {
  for (var job in work.jobs) {
    var formattedWorkEmployer;
    var formattedWorkTitle;
    $("#workExperience").append([HTMLworkStart]);
    formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
    $(".work-entry:last").append([HTMLworkDates.replace("%data%", work.jobs[job].dates)]);
    $(".work-entry:last").append([HTMLworkLocation.replace("%data%", work.jobs[job].location)]);
    $(".work-entry:last").append([HTMLworkDescription.replace("%data%", work.jobs[job].description)]);
  }
}

work.display();

projects.display = function () {
  // Format the Projects
  for (var iProject in projects.projects) {
    $("#projects").append([HTMLprojectStart]);
    $(".project-entry:last").append([HTMLprojectTitle.replace("%data%", projects.projects[iProject].title)]);
    $(".project-entry:last").append([HTMLprojectDates.replace("%data%", projects.projects[iProject].dates)]);
    $(".project-entry:last").append([HTMLprojectDescription.replace("%data%", projects.projects[iProject].description)]);
    for (var iImage in projects.projects[iProject].images)
      $(".project-entry:last").append([HTMLprojectImage.replace("%data%", projects.projects[iProject].images[iImage])]);
  }

}

projects.display();

education.display = function () {

  // Format the Education
  for (var iSchool in education.schools) {
    $("#education").append([HTMLschoolStart]);
    $(".education-entry:last").append([HTMLschoolName.replace("%data%", education.schools[iSchool].name)]);
    $(".education-entry:last").append([HTMLschoolLocation.replace("%data%", education.schools[iSchool].location)]);
    $(".education-entry:last").append([HTMLschoolDegree.replace("%data%", education.schools[iSchool].degree)]);
    for (var iMajor in education.schools[iSchool].majors) {
      $(".education-entry:last").append([HTMLschoolMajor.replace("%data%", education.schools[iSchool].majors[iMajor])]);
    }
    $(".education-entry:last").append([HTMLschoolDates.replace("%data%", education.schools[iSchool].dates)]);
    $(".education-entry:last").append([HTMLonlineURL.replace("%data%", education.schools[iSchool].url)]);
  }

  // Format the Online Classes
  $("#education").append([HTMLonlineClasses]);
  for (var iCourse in education.onlineCourses) {
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[iCourse].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[iCourse].school);
    $("#education").append([HTMLschoolStart]);
    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
    $(".education-entry:last").append([HTMLonlineDates.replace("%data%", education.onlineCourses[iCourse].dates)]);
    $(".education-entry:last").append([HTMLonlineURL.replace("%data%", education.onlineCourses[iCourse].url)]);
  }

}

education.display();

$("#mapDiv").append(googleMap);

$(document).click(function (loc) {
  logClicks(event.pageX, event.pageY);
});

$("#main").append([internationalizeButton]);

function inName(myName) {
  myName = myName.trim().split(" ");
  bio.name =
    myName[0][0].toLocaleUpperCase() +
    myName[0].substring(1).toLocaleLowerCase() +
    " " +
    myName[1].toLocaleUpperCase();
  return bio.name;
}
