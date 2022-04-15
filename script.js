// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

function displayDate() {
    document.getElementById("showDate").innerHTML=Date();

}

var comment = document.getElementById("input");
var saveButton = document.getElementById("save");

function saveComment() {
  // Save related form data as an object
  var hourlyComment = {
    comment: comment.value.trim()
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("hourlyComment", JSON.stringify(hourlyComment));
}

function renderComment() {
  // Use JSON.parse() to convert text to JavaScript object
  var lastComment = JSON.parse(localStorage.getItem("hourlyComment"));
  // Check if data is returned, if not exit out of the function
  if (lastComment !== null) {
  document.getElementById("input").innerHTML = lastComment.comment;
  } else {
    return;
  }
}

saveButton.addEventListener("click", function(event) {
event.preventDefault();
saveComment();
renderComment();
});

// The init() function fires when the page is loaded 
function init() {
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderComment();
}
init();

var timeDisplayEl = $('#time-display');


function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }