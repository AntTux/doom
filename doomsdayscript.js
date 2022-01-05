/*
Handles all gameplay, checks if input is valid solution, adds solution to list
of answers, saves players progress as it goes.
*/

// generate dates between start and end dates
function getDates (startDate, endDate) {
  const dates = []
  let currentDate = startDate
  const addDays = function (days) {
    const date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date
  }
  while (currentDate <= endDate) {
    dates.push(currentDate)
    currentDate = addDays.call(currentDate, 1)
  }
  return dates
}

// return random date for given start and end date
function randomDate(dateArray) {
  return dateArray[Math.floor(Math.random()*dateArray.length)];
}


// Usage
const dates = getDates(new Date(1900, 1, 1), new Date(2200, 1, 1))
var previousDates = [""]
var totalGuesses = 0;
var totalCorrectGuesses = 0;

//set up the date for the level on initial load of page
date = randomDate(dates)
document.getElementById('date').innerText = date.toDateString().substring(3,20);
dayOfWeek = date.toDateString().substring(0,3);
// console.log(dayOfWeek)


//set up the date for the level (called each time next date is pressed or guess submitted)
function generateNewDate(){
  date = randomDate(dates)
  document.getElementById('date').innerText = date.toDateString().substring(3,20);
  dayOfWeek = date.toDateString().substring(0,3);
  // console.log(dayOfWeek)
}





function checkDayOfWeek(guess_dayOfWeek) {
  var li
  var node = document.createElement("Li");
  node.className="list-group-item rounded-0";
  totalGuesses+=1;

  if (guess_dayOfWeek === dayOfWeek){
    // console.log('Correct!')
    // console.log(date.toDateString().substring(3,20) + ' is a '+ dayOfWeek)
    li = date.toDateString().substring(3,20) + ' is a '+ dayOfWeek;
    var textnode=document.createTextNode(li);
    node.appendChild(textnode);
    node.style="background-color: lightgreen;"
    totalCorrectGuesses+=1;

  }
  else {
    // console.log('Inorrect :(')
    // console.log(date.toDateString().substring(3,20) + ' is a '+ dayOfWeek)
    li = date.toDateString().substring(3,20) + ' is a '+ dayOfWeek + ' and not ' + guess_dayOfWeek;
    var textnode=document.createTextNode(li);
    node.appendChild(textnode);
    node.style="background-color: lightgray;"
  }

  
  // update total correct counter
  // console.log(totalCorrectGuesses.toString());
  document.getElementById("correctGuesses").innerText = totalCorrectGuesses.toString();
  document.getElementById("totalGuesses").innerText = (totalGuesses-totalCorrectGuesses).toString();

  // adding this guess and answer to list of previous dates
  document.getElementById("list").prepend(node);


}