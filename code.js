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



//3. loops
//4. objects
//5. methods
//6. functions
