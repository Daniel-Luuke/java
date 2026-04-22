// 1. If else statements
const studentName = "Sheila";
const studentGender = "Female";
const studentName1 = "James";
const studentGender1 = "Male";
let grade;
// first itteration
if (studentGender1 == "Male") {
  console.log("Accept");
} else {
  console.log("Reject");
}

// second iteration
if (studentGender == "Female") {
  grade = 87;
  console.log(grade);
} else if (studentGender1 == "Male") {
  grade = 90;
  console.log(grade);
}



//2. Switch Cases
let trafficLight = "green";

switch (trafficLight) {
  //red case
  case "red":
    console.log("STOP");
    break;

  //amber case
  case "amber":
    console.log("GET READY");
    break;

  //green case
  case "green":
    console.log("GO");
    break;

  default:
    console.log("YOU DON'T HAVE A CAR");
    break;
}

let studentScore = 81;

switch (true) {
  case studentScore > 79:
    console.log("A");
    break;

  case studentScore > 64:
    console.log("B");
    break;

  case studentScore > 44:
    console.log("D");
    break;

  default:
    console.log("F");
    break;
}

// Generate random number between 1 and 100
let randomNum = Math.floor(Math.random() * 100) + 1;
if (randomNum < 50) {
  console.log("upper");
} else {
  console.log("lower");
}


//3. loops
//for loop 
// - best know for counting or when number of steps are known
// - use this wneb you know how many times you want to run your code

let savings = 200;

for (let week = 1; week <=5; week ++){
    savings = savings + 200
    console.log("Week" + week + ": You now have KES" + savings
    );
}








//for...of loop - best known for going through each item in a list

//for...in loop - best known for iterrating over the properties of an object

//while...loop - best known for repeating until a condition is met


//4. objects
//5. methods
//6. functions
