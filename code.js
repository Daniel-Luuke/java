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