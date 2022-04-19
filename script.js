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
      var comment = document.getElementById(localStorage.key(i) + '-comment')
      comment.innerHTML = hour
     }
  }
scheduler.addEventListener("click", function(event) {

  var target = event.target;
  event.preventDefault();
  saveComment(target.parentElement.id);
})

renderComment();