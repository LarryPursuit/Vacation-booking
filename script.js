// Define constants representing property criteria
const beds = 6;
const minBeds = 5;
const reviewScore = 4.78;
const minReviewScore = 3.5;
const costPerNight = 140;
const maxCostPerNight = 150;
const pool = true;
const needPool = true;
const country = "Italy";
const inCountry = "Italy";

// Initialize match flag as true, indicating a potential match
let match = true;

// Check if the number of beds meets the minimum requirement
if (beds < minBeds) {
  match = false; // If not, set match to false
}

// Check if the review score meets the minimum requirement
if (reviewScore < minReviewScore) {
  match = false; // If not, set match to false
}

// Check if a pool is required but not available
if (needPool && !pool) {
  match = false; // If not, set match to false
}

// Check if the property location matches the desired country
if (inCountry !== country) {
  match = false; // If not, set match to false
}

// Check if the cost per night exceeds the maximum allowed
if (costPerNight > maxCostPerNight) {
  match = false; // If so, set match to false
  // These variables are declared but not used in the else block
  let saving;
  let message;
} else {
  // Calculate the potential saving if the cost is within the limit
  saving = maxCostPerNight - costPerNight;
}

// Construct message based on match status and potential saving
if (match) {
  message = "This property is a match!";
  if (saving) {
    message = message + " It is $" + saving + " cheaper than your maximum.";
  }
}

// Display appropriate message on the webpage based on match status
if (match) {
  document.getElementById("message").innerText = message;
} else {
  document.getElementById("message").innerText =
    "Sorry, this property is not suitable.";
}

// Update the list items on the webpage to display property details
const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Beds: " + beds;
listItemArray[1].innerHTML = "Review Score: " + reviewScore;
listItemArray[2].innerHTML = "Cost: " + costPerNight;
listItemArray[3].innerHTML = "Pool: " + (pool ? "Yes" : "No");
listItemArray[4].innerHTML = "Location: " + country;
listItemArray[5].innerHTML = "Minimum beds: " + minBeds;
listItemArray[6].innerHTML = "Minimum Review Score: " + minReviewScore;
listItemArray[7].innerHTML = "Maximum Cost: " + maxCostPerNight;
//  for future use
// listItemArray[8].innerHTML = "Must Have Pool: " + ((needPool) ? "Yes" : "No");
// listItemArray[9].innerHTML = "Location: " + inCountry;
