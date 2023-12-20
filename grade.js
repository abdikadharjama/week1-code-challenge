const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateGrade() {
  rl.question("Enter student marks (between 0 and 100): ", (userInput) => {
    // Parse the user input as a number
    let marks = parseFloat(userInput);

    // Check if the input is a valid number between 0 and 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
      console.log("Invalid input. Please enter a number between 0 and 100.");
    } else {
      // Determine the grade based on the given criteria
      if (marks > 79) {
        console.log("Grade: A");
      } else if (marks >= 60) {
        console.log("Grade: B");
      } else if (marks >= 50) {
        console.log("Grade: C");
      } else if (marks >= 40) {
        console.log("Grade: D");
      } else {
        console.log("Grade: E");
      }
    }

    // Close the readline interface
    rl.close();
  });
}

// Call the function to start the input process
calculateGrade();
