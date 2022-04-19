// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var today = new Date;
document.getElementById('time').innerHTML= today.toDateString();
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours



// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// var comment = document.getElementById("input");
var scheduler = document.getElementById("scheduler");

function saveComment(hourTag) {

  var comment = document.getElementById(hourTag + '-comment');
  localStorage.setItem(hourTag, comment.value);
}

function renderComment() {
  for (var i = 0; i < localStorage.length; i++){
      var hour = localStorage.getItem(localStorage.key(i));
      var comment = document.getElementById(localStorage.key(i) + "-comment")
      comment.innerHTML = hour
     }
  // Check if data is returned, if not exit out of the function


scheduler.addEventListener("click", function(event) {
  var target = event.target;
  event.preventDefault();
  saveComment(target.parentElement.id);
  renderComment();
});


  var hour9text = localStorage.getItem("hour-9");
  var hour10text = localStorage.getItem("hour-10");
  var hour11text = localStorage.getItem("hour-11");
  var hour12text = localStorage.getItem("hour-12");
  var hour13text = localStorage.getItem("hour-13");
  var hour14text = localStorage.getItem("hour-14");
  var hour15text = localStorage.getItem("hour-15");
  var hour16text = localStorage.getItem("hour-16");
  var hour17text = localStorage.getItem("hour-17");

}




// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future