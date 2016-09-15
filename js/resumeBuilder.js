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
    "blog": "http://bertciccone.com",
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
};

console.log(projects);

// Education and online course data
var education = {
  "schools": [{
    "name": "University of Southern California",
    "location": "Los Angeles, California",
    "degree": "MBA",
    "majors": ["Information Systems", "Entrepreneurship"],
    "dates": "", // intentionally left blank
    "url": "http://usc.edu"
  }, {
    "name": "California State University",
    "location": "Northridge, California",
    "degree": "BS",
    "majors": ["Computer Science"],
    "dates": "", // intentionally left blank
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
  $("#nav").addClass(HTMLrow);
  $("#nav").append([HTMLtabs]);
  $("#tabs").append([HTMLtabList]);
  $(".tabList:last").append([HTMLnavProfile]);
  $(".tabList:last").append([HTMLnavWork]);
  $(".tabList:last").append([HTMLnavEducation]);
  $(".tabList:last").append([HTMLnavContact]);
};

nav.display();

// Format the header
bio.displayHeader = function () {
  // Format the row and columns
  $("#header").addClass(HTMLrow);
  $("#header").append([HTMLpicCol]);
  $("#header").append([HTMLbioCol]);
  // Format the content
  $("#picCol").append([HTMLbioPic.replace("%data%", bio.bioPic)]);
  $("#bioCol").append([HTMLheaderName.replace("%data%", bio.name)]);
  $("#bioCol").append([HTMLheaderRole.replace("%data%", bio.role)]);
  $("#bioCol").append(
    [HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)]);
  $("#bioCol").append([HTMLrule]);
};

bio.displayHeader();

// Format the skills
bio.displaySkills = function () {
  if (bio.skills) {
    // Format the row columns
    $("#skills").addClass(HTMLrow);
    $("#skills").append([HTMLskillsHeadingCol]);
    $("#skillsHeadingCol").append([HTMLskillsCol1]);
    $("#skillsHeadingCol").append([HTMLskillsCol2]);
    // Format the content
    bio.skills.forEach(function (skill, iSkill) {
      if (!(iSkill % 2)) {
        $("#skillsCol1").append([HTMLskill.replace("%data%", skill)]);
      } else {
        $("#skillsCol2").append([HTMLskill.replace("%data%", skill)]);
      }
    });
  }
};

bio.displaySkills();

// Format the work
work.display = function () {
  // Format the row and heading
  $("#workExperience").addClass(HTMLrow);
  $("#workExperience").append([HTMLworkHeadingCol]);
  // Format the content
  work.jobs.forEach(function (job) {
    // Format the work entry columns
    $("#workExperience").append([HTMLworkStart]);
    $(".work-entry:last").append([HTMLworkDatesCol]);
    $(".work-entry:last").append([HTMLworkIconCol]);
    $(".work-entry:last").append([HTMLworkTitleCol]);
    $(".work-entry:last").append([HTMLworkCompanyCol]);
    $(".work-entry:last").append([HTMLworkDescriptionCol]);
    // Format the work entry content
    $(".work-entry:last .workDatesCol").append(
      [HTMLworkDates.replace("%data%", job.dates)]);
    $(".work-entry:last .workIconCol").append([HTMLworkIcon]);
    $(".work-entry:last .workTitleCol").append(
      [HTMLworkTitle.replace("%data%", job.title)]);
    $(".work-entry:last .workCompanyCol").append(
      [HTMLworkEmployer.replace("%data%", job.employer)]);
    $(".work-entry:last .workCompanyCol").append(
      [HTMLworkLocation.replace("%data%", job.location)]);
    $(".work-entry:last .workDescriptionCol").append(
      [HTMLworkDescription.replace("%data%", job.description)]);
  });
};

work.display();

// Format the projects
projects.display = function () {
  // Format the row and heading
  $("#projects").addClass(HTMLrow);
  $("#projects").append([HTMLprojectHeadingCol]);
  projects.projects.forEach(function (project) {
    // Format the project entry columns
    $("#projects").append([HTMLprojectStart]);
    $(".project-entry:last").append([HTMLprojectDateCol]);
    $(".project-entry:last").append([HTMLprojectIconCol]);
    $(".project-entry:last").append([HTMLprojectTitleCol]);
    $(".project-entry:last").append([HTMLprojectDescriptionCol]);
    $(".project-entry:last").append([HTMLprojectPicturesCol]);
    // Format the content
    $(".project-entry:last .projectDateCol").append(
      [HTMLprojectDates.replace("%data%", project.dates)]);
    $(".project-entry:last .projectIconCol").append([HTMLprojectIcon]);
    $(".project-entry:last .projectTitleCol").append(
      [HTMLprojectTitle.replace("%data%", project.title)]);
    $(".project-entry:last .projectDescriptionCol").append(
      [HTMLprojectDescription.replace("%data%", project.description)]);
    project.images.forEach(function (image) {
      $(".project-entry:last .projectPicturesCol").append(
        [HTMLprojectImage.replace("%data%", image)]);
    });
  });
};

projects.display();

// Format the education
education.display = function () {

  // Format the schools
  // Format the row and heading
  $("#education").addClass(HTMLrow);
  $("#education").append([HTMLschoolsHeadingCol]);
  education.schools.forEach(function (school) {
    // Format the school entry columns
    $("#education").append([HTMLschoolStart]);
    $(".education-entry:last").append([HTMLschoolDatesCol]);
    $(".education-entry:last").append([HTMLschoolIconCol]);
    $(".education-entry:last").append([HTMLschoolNameCol]);
    $(".education-entry:last").append([HTMLschoolLocationCol]);
    $(".education-entry:last").append([HTMLschoolDegreeCol]);
    // Format the content
    $(".education-entry:last .schoolDatesCol").append(
      [HTMLschoolDates.replace("%data%", school.dates)]);
    $(".education-entry:last .schoolIconCol").append([HTMLschoolIcon]);
    $(".education-entry:last .schoolNameCol").append(
      [HTMLschoolName.replace("%data%", school.name)]);
    $(".education-entry:last .schoolLocationCol").append(
      [HTMLschoolLocation.replace("%data%", school.location)]);
    $(".education-entry:last .schoolLocationCol").append(
      [HTMLschoolURL.replace("%data%", school.url)]);
    $(".education-entry:last .schoolDegreeCol").append(
      [HTMLschoolDegree.replace("%data%", school.degree)]);
    school.majors.forEach(function (major) {
      $(".education-entry:last .schoolDegreeCol").append(
        [HTMLschoolMajor.replace("%data%", major)]);
    });
  });

  // Format the online courses
  // Format the heading
  $("#education").append([HTMLcoursesHeadingCol]);
  education.onlineCourses.forEach(
    function (course) {
      // Format the course entry columns
      $("#education").append([HTMLcourseStart]);
      $(".course-entry:last").append([HTMLcourseDatesCol]);
      $(".course-entry:last").append([HTMLcourseIconCol]);
      $(".course-entry:last").append([HTMLcourseTitleCol]);
      $(".course-entry:last").append([HTMLcourseSchoolCol]);
      // Format the content
      $(".course-entry:last .courseDatesCol").append(
        [HTMLcourseDates.replace("%data%", course.dates)]);
      $(".course-entry:last .courseIconCol").append([HTMLcourseIcon]);
      $(".course-entry:last .courseTitleCol").append(
        [HTMLcourseTitle.replace("%data%", course.title)]);
      $(".course-entry:last .courseSchoolCol").append(
        [HTMLcourseSchool.replace("%data%", course.school)]);
      $(".course-entry:last .courseSchoolCol").append(
        [HTMLcourseURL.replace("%data%", course.url)]);
    });
};

education.display();

// Format the contacts
bio.displayContacts = function () {
  // Format the row and columns
  $("#contacts").addClass(HTMLrow);
  $("#contacts").append([HTMLcontactHeadingCol]);

  // Format the contact row, column and content
  $("#contactHeadingCol").append([HTMLcontactRow]);
  $(".contact-row:last").append([HTMLcontactStart]);
  $(".contact-entry:last").append([HTMLcontactBlankCol]);
  $(".contact-entry:last").append([HTMLcontactIconCol]);
  $(".contact-entry:last").append([HTMLcontactEntryCol]);

  $(".contact-entry:last .contact-icon-col").append([HTMLmobileIcon]);
  $(".contact-entry:last .contact-entry-col").append([HTMLcontact.replace("%data%", bio.contacts.mobile)]);

  $(".contact-row:last").append([HTMLcontactStart]);
  $(".contact-entry:last").append([HTMLcontactIconCol]);
  $(".contact-entry:last").append([HTMLcontactEntryCol]);

  $(".contact-entry:last .contact-icon-col").append([HTMLemailIcon]);
  $(".contact-entry:last .contact-entry-col").append([HTMLcontact.replace("%data%", bio.contacts.email)]);

  // Format the contact row, column and content
  $("#contactHeadingCol").append([HTMLcontactRow]);
  $(".contact-row:last").append([HTMLcontactStart]);
  $(".contact-entry:last").append([HTMLcontactBlankCol]);
  $(".contact-entry:last").append([HTMLcontactIconCol]);
  $(".contact-entry:last").append([HTMLcontactEntryCol]);

  $(".contact-entry:last .contact-icon-col").append([HTMLtwitterIcon]);
  $(".contact-entry:last .contact-entry-col").append([HTMLcontact.replace("%data%", bio.contacts.twitter)]);

  $(".contact-row:last").append([HTMLcontactStart]);
  $(".contact-entry:last").append([HTMLcontactIconCol]);
  $(".contact-entry:last").append([HTMLcontactEntryCol]);

  $(".contact-entry:last .contact-icon-col").append([HTMLgithubIcon]);
  $(".contact-entry:last .contact-entry-col").append([HTMLcontact.replace("%data%", bio.contacts.github)]);

  // Format the contact row, column and content
  $("#contactHeadingCol").append([HTMLcontactRow]);
  $(".contact-row:last").append([HTMLcontactStart]);
  $(".contact-entry:last").append([HTMLcontactBlankCol]);
  $(".contact-entry:last").append([HTMLcontactIconCol]);
  $(".contact-entry:last").append([HTMLcontactEntryCol]);

  $(".contact-entry:last .contact-icon-col").append([HTMLblogIcon]);
  $(".contact-entry:last .contact-entry-col").append([HTMLcontact.replace("%data%", bio.contacts.blog)]);

  $(".contact-row:last").append([HTMLcontactStart]);
  $(".contact-entry:last").append([HTMLcontactIconCol]);
  $(".contact-entry:last").append([HTMLcontactEntryCol]);

  $(".contact-entry:last .contact-icon-col").append([HTMLlocationIcon]);
  $(".contact-entry:last .contact-entry-col").append([HTMLcontact.replace("%data%", bio.contacts.location)]);
};

bio.displayContacts();

// Format the map
$("#theMap").addClass(HTMLrow);
$("#theMap").append([HTMLmapCol]);
$("#mapDiv").append([HTMLmapHeading]);
$("#mapDiv").append(googleMap);

// Format the internationalization of the name
$("#lets-connect").addClass(HTMLrow);
$("#lets-connect").append([HTMLintlCol]);
$("#intlCol").append([intlButton]);

function inName(myName) {
  myName = myName.trim().split(" ");
  bio.name =
    myName[0][0].toLocaleUpperCase() +
    myName[0].substring(1).toLocaleLowerCase() +
    " " +
    myName[1].toLocaleUpperCase();
  return bio.name;
}

// Turn on the click tracking
$(document).click(function (loc) {
  logClicks(event.pageX, event.pageY);
});
