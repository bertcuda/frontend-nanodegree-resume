/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/

/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/

// Global helper variables
var HTMLcontainer = 'container';
var HTMLrow = 'row';
var HTMLiconOffset = 'col-md-offset-3';

// Navigation helper variables
var HTMLtabs = '<div id="tabs"></div>';
var HTMLtabList = '<ul class="tabList"></ul>';
var HTMLnavProfile = '<li><div class="navCol col-xs-3"><a href="#bioCol" class="navItem fa fa-user fa-2x bg-user" aria-hidden="true"></a></div></li>';
var HTMLnavWork = '<li><div class="navCol col-xs-3"><a href="#work-heading-col" class="navItem fa fa-briefcase fa-2x bg-briefcase" aria-hidden="true"></a></div></li>';
var HTMLnavEducation = '<li><div class="navCol col-xs-3"><a href="#education-heading-col" class="navItem fa fa-graduation-cap fa-2x bg-graduation-cap" aria-hidden="true"></a></div></li>';
var HTMLnavContact = '<li><div class="navCol col-xs-3"><a href="#connect-heading-col" class="navItem fa fa-envelope fa-2x bg-envelope" aria-hidden="true"></a></div></li>';

// Header helper variables
var HTMLpicCol = '<div id="picCol" class="col-xs-12 col-md-4"></div>';
var HTMLbioCol = '<div id="bioCol" class="col-xs-12 col-md-8"></div>';
var HTMLruleCol = '<div id="ruleCol" class="col-xs-12 col-md-12"><hr></div>';
var HTMLbioPic = '<a href="#"><img src="%data%" class="biopic img-responsive center-block"></a>';
var HTMLheaderName = '<h1 id="name"><a href="#">%data%</a></h1>';
var HTMLheaderRole = '<h3 class="role-entry">%data%</h3>';
var HTMLwelcomeMsg = '<p class="welcome-message">%data%</p>';

// Skills helper variables
var HTMLskillsHeadingCol = '<div id="skills-heading-col" class="col-xs-12"><h2><a href="#">Skills at a Glance</a></h2></div>';
var HTMLskillsCol1 = '<div id="skillsCol1" class="col-xs-12 col-md-4 col-md-offset-4"></div>';
var HTMLskillsCol2 = '<div id="skillsCol2" class="col-xs-12 col-md-4"></div>';
var HTMLskill = '<p class="skills-entry">%data%</p>';

// Work helper variables
var HTMLworkHeadingCol = '<div id="work-heading-col" class="col-xs-12"><h2><a href="#">Work Experience</a></h2></div>';
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkDatesCol = '<div class="work-dates-col col-xs-12 col-md-3"></div>';
var HTMLworkIconCol = '<div class="work-icon-col col-xs-12 col-md-1"></div>';
var HTMLworkTitleCol = '<div class="work-title-col col-xs-12 col-md-4"></div>';
var HTMLworkCompanyCol = '<div class="work-company-col col-xs-12 col-md-4"></div>';
var HTMLworkDescriptionCol = '<div class="work-description-col col-xs-12 col-md-8 col-md-offset-4"></div>';
var HTMLworkDates = '<p class="date-text">%data%</p>';
var HTMLworkIcon = '<a class = "fa fa-briefcase fa-2x entry-icon" href="#"></a>'
var HTMLworkTitle = '<a class="title-text" href="#">%data%</a>';
var HTMLworkEmployer = '<span class="employer-text"><a href="#">%data%</a></span>';
var HTMLworkLocation = '<a class="location-text" href="#">%data%</a>';
var HTMLworkDescription = '<p><br>%data%</p>';

// Projects helper variables
var HTMLprojectHeadingCol = '<div id="project-heading-col" class="col-xs-12"><h2><a href="#">Projects</a></h2></div>';
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectDateCol = '<div class="project-date-col col-xs-12 col-md-3"></div>';
var HTMLprojectIconCol = '<div class="project-icon-col col-xs-12 col-md-1"></div>';
var HTMLprojectTitleCol = '<div class="project-title-col col-xs-12 col-md-8"></div>';
var HTMLprojectDescriptionCol = '<div class="project-description-col col-xs-12 col-md-8 col-md-offset-4"></div>';
var HTMLprojectPicturesCol = '<div class="project-pictures-col col-xs-12 col-md-8 col-md-offset-4"></div>';
var HTMLprojectDates = '<p class="date-text">%data%</p>';
var HTMLprojectIcon = '<a class = "fa fa-folder fa-2x entry-icon" href="#"></a>'
var HTMLprojectTitle = '<a class="project-text" href="#">%data%</a>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img class="project-image" src="%data%">';

// Education helper variables
var HTMLschoolsHeadingCol = '<div id="education-heading-col" class="col-xs-12"><h2><a href="#">Education</a></h2></div>';
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolDatesCol = '<div class="schoolDatesCol col-xs-12 col-md-3"></div>';
var HTMLschoolIconCol = '<div class="school-icon-col col-xs-12 col-md-1"></div>';
var HTMLschoolNameCol = '<div class="school-name-col col-xs-12 col-md-4"></div>';
var HTMLschoolLocationCol = '<div class="school-location-col col-xs-12 col-md-4"></div>';
var HTMLschoolDegreeCol = '<div class="school-degree-col col-xs-12  col-md-8 col-md-offset-4"></div>';
var HTMLschoolDates = '<p class="date-text">%data%</p>';
var HTMLschoolIcon = '<a class = "fa fa-graduation-cap fa-2x entry-icon" href="#"></a>'
var HTMLschoolName = '<a class="school-text" href="#">%data%</a>';
var HTMLschoolLocation = '<a class="location-text" href="#">%data%</a>';
var HTMLschoolURL = '<a href="#">%data%</a>';
var HTMLschoolDegree = '<a class="school-text">%data%</a>';
var HTMLschoolMajor = '<br><span class="major-text">Major: %data%</span>';

// Online courses helper variables
var HTMLcoursesHeadingCol = '<div id="courses-heading-col" class="col-xs-12 col sm-12"><h2><a href="#">Online Classes</a></h2></div>';
var HTMLcourseRow = '<div class="row course-row"</div>';
var HTMLcourseStart = '<div class="course-entry"></div>';
var HTMLcourseDatesCol = '<div class="course-dates-col col-xs-12 col-md-3"></div>';
var HTMLcourseIconCol = '<div class="course-icon-col col-xs-12 col-md-1"></div>';
var HTMLcourseTitleCol = '<div class="course-title-col col-xs-12 col-md-4"></div>';
var HTMLcourseSchoolCol = '<div class="course-school-col col-xs-12 col-md-4"></div>';
var HTMLcourseDates = '<p class="date-text">%data%</p>';
var HTMLcourseIcon = '<a class = "fa fa-book fa-2x entry-icon" href="#"></a>'
var HTMLcourseTitle = '<a class="course-text" href="#">%data%</a>';
var HTMLcourseSchool = '<a class="location-text" href="#">%data%</a>';
var HTMLcourseURL = '<a href="#">%data%</a>';

// Map helper variables
var HTMLmapCol = '<div id="mapDiv" class="col-xs-12"></div>';
var HTMLmapHeading = '<h2><a href="#">Places Where I\'ve Lived and Worked</a></h2>';
var googleMap = '<div id="map"></div>';

var HTMLintlCol = '<div id="intlCol" class="col-xs-12"></div>';
var intlButton = '<button>Internationalize</button>';

// Contact helper variables
var HTMLcontactHeadingCol = '<div id="contact-heading-col" class="col-xs-12"><h2><a href="#">Contact</a></h2></div>';
var HTMLcontactRow = '<div class="row contact-row"</div>';
var HTMLcontactStart = '<div class="contact-entry"></div>';
var HTMLcontactIconCol = '<div class="contact-icon-col col-xs-12 col-md-1"></div>';
var HTMLcontactEntryCol = '<div class="contact-entry-col col-xs-12 col-md-3"></div>';
var HTMLmobileIcon = '<a class = "fa fa-mobile fa-2x entry-icon" href="#"></a>'
var HTMLemailIcon = '<a class = "fa fa-envelope fa-2x entry-icon" href="#"></a>'
var HTMLtwitterIcon = '<a class = "fa fa-twitter fa-2x entry-icon" href="#"></a>'
var HTMLgithubIcon = '<a class = "fa fa-github fa-2x entry-icon" href="#"></a>'
var HTMLblogIcon = '<a class = "fa fa-external-link-square fa-2x entry-icon" href="#"></a>'
var HTMLlocationIcon = '<a class = "fa fa-map-marker fa-2x entry-icon" href="#"></a>'
var HTMLcontact = '<p>%data%</p>';

// Footer helper variables
var HTMLconnectHeadingCol = '<div id="connect-heading-col" class="col-xs-12"><h2><a href="#">Let\'s Connect</a></h2></div>';

/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function () {
  $('button').click(function () {
    var $name = $('#name');
    var iName = inName($name.text()) || function () {};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x, y) {
  clickLocations.push({
    x: x,
    y: y
  });
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function (loc) {
  // your code goes here!
});

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function (school) {
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function (job) {
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat(); // latitude from the place service
    var lon = placeData.geometry.location.lng(); // longitude from the place service
    var name = placeData.formatted_address; // name of the place from the place service
    var bounds = window.mapBounds; // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    locations.forEach(function (place) {
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function (e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
