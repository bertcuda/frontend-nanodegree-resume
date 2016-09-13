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
    "description": "Lead development and launch of web, mobile and enterprise applications, working closely with marketing product managers, vendors and Scrum development teams creating infrastructure, systems and applications that drive HP computer, web and mobile marketing initiatives."
  }, {
    "employer": "Tyco",
    "title": "Business System Analyst/Program Manager",
    "location": "Irvine/San Francisco, California",
    "dates": "January, 2009 to June, 2013",
    "description": "Introduced RFID Internet of Things (IoT) technology solutions into top domestic and international companies including Inditex/Zara, Macy’s and others, resulting in successful, revenue-generating customer engagements. Help customers achieve significant business process innovation and increased sales."
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

// Setup the Bootstrap container
$("#body").toggleClass(HTMLcontainer, true);

// Format the navigation
nav.display = function () {
  $("#nav").toggleClass(HTMLrow, true);
  $("#nav").append([HTMLtabs]);
  $("#tabs").append([HTMLtabList]);
  $(".tabList:last").append([HTMLnavProfile]);
  $(".tabList:last").append([HTMLnavWork]);
  $(".tabList:last").append([HTMLnavEducation]);
  $(".tabList:last").append([HTMLnavContact]);
}

nav.display();

// Format the header
bio.displayHeader = function () {
  $("#header").toggleClass(HTMLrow, true);
  $("#header").append([HTMLheaderCol]);
  $("#headerCol").append([HTMLbioPic.replace("%data%", bio.bioPic)]);
  $("#headerCol").append([HTMLheaderName.replace("%data%", bio.name)]);
  $("#headerCol").append([HTMLheaderRole.replace("%data%", bio.role)]);
  $("#headerCol").append(
    [HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)]);
  $("#headerCol").append([HTMLrule]);
}

bio.displayHeader();

// Format the skills
bio.displaySkills = function () {
  if (bio.skills) {
    $("#skills").toggleClass(HTMLrow, true);
    $("#skills").append([HTMLskillsCol]);
    bio.skills.forEach(function (skill) {
      $("#skillsCol").append([HTMLskill.replace("%data%", skill)]);
    })
  }
}

bio.displaySkills();

// Format the work
work.display = function () {
  $("#workExperience").toggleClass(HTMLrow, true);
  $("#workExperience").append([HTMLworkCol]);
  work.jobs.forEach(function (job) {
    $("#workCol").append([HTMLworkStart]);
    $(".work-entry:last").append([HTMLworkIcon]);
    $(".work-entry:last").append(
      [HTMLworkEmployer.replace("%data%", job.employer)]);
    $(".work-entry:last").append([HTMLworkTitle.replace("%data%", job.title)]);
    $(".work-entry:last").append([HTMLworkDates.replace("%data%", job.dates)]);
    $(".work-entry:last").append(
      [HTMLworkLocation.replace("%data%", job.location)]);
    $(".work-entry:last").append(
      [HTMLworkDescription.replace("%data%", job.description)]);
  })
}

work.display();

// Format the projects
projects.display = function () {
  $("#projects").toggleClass(HTMLrow, true);
  $("#projects").append([HTMLprojectCol]);
  projects.projects.forEach(function (project) {
    $("#projectCol").append([HTMLprojectStart]);
    $(".project-entry:last").append(
      [HTMLprojectTitle.replace("%data%", project.title)]);
    $(".project-entry:last").append(
      [HTMLprojectDates.replace("%data%", project.dates)]);
    $(".project-entry:last").append(
      [HTMLprojectDescription.replace("%data%", project.description)]);
    project.images.forEach(function (image) {
      $(".project-entry:last").append(
        [HTMLprojectImage.replace("%data%", image)]);
    })
  })
}

projects.display();

// Format the education
education.display = function () {
  $("#education").toggleClass(HTMLrow, true);
  $("#education").append([HTMLschoolsCol]);

  education.schools.forEach(function (school) {
    $("#educationCol").append([HTMLschoolStart]);
    $(".education-entry:last").append(
      [HTMLschoolName.replace("%data%", school.name)]);
    $(".education-entry:last").append(
      [HTMLschoolLocation.replace(
        "%data%", school.location)]);
    $(".education-entry:last").append(
      [HTMLschoolDegree.replace("%data%", school.degree)]);

    school.majors.forEach(function (major) {
      $(".education-entry:last").append(
        [HTMLschoolMajor.replace("%data%", major)]);
    })

    $(".education-entry:last").append(
      [HTMLschoolDates.replace("%data%", school.dates)]);
    $(".education-entry:last").append(
      [HTMLonlineURL.replace("%data%", school.url)]);
  })

  // Format the online courses
  $(".education-entry:last").append([HTMLonlineClasses]);

  education.onlineCourses.forEach(
    function (course) {
      $(".education-entry:last").append(
        [HTMLonlineTitle.replace("%data%", course.title)]);
      $(".education-entry:last").append(
        [HTMLonlineSchool.replace("%data%", course.school)]);
      $(".education-entry:last").append(
        [HTMLonlineDates.replace("%data%", course.dates)]);
      $(".education-entry:last").append(
        [HTMLonlineURL.replace("%data%", course.url)]);
    })
}
education.display();

// Format the contacts
$("#contacts").toggleClass(HTMLrow, true);
$("#contacts").append([HTMLcontactsCol]);
bio.displayContacts = function () {
  $("#contactsCol").append([HTMLmobile.replace("%data%", bio.contacts.mobile)]);
  $("#contactsCol").append([HTMLemail.replace("%data%", bio.contacts.email)]);
  $("#contactsCol").append([HTMLgithub.replace("%data%", bio.contacts.github)]);
  $("#contactsCol").append(
    [HTMLtwitter.replace("%data%", bio.contacts.twitter)]);
  $("#contactsCol").append([HTMLlocation.replace("%data%", bio.contacts.location)]);
}

bio.displayContacts();

// Format the map
$("#theMap").toggleClass(HTMLrow, true);
$("#theMap").append([HTMLmapCol]);
$("#mapDiv").append([HTMLmapHeading]);
$("#mapDiv").append(googleMap);

// Turn on the click tracking
$(document).click(function (loc) {
  logClicks(event.pageX, event.pageY);
});

// Format the internationalization of the name
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
