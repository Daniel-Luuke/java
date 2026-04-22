// 1. If else statements
// const studentName = "Sheila";
// const studentGender = "Female";
// const studentName1 = "James";
// const studentGender1 = "Male";
// let grade;
// // first itteration
// if (studentGender1 == "Male") {
//   console.log("Accept");
// } else {
//   console.log("Reject");
// }

// second iteration
// if (studentGender == "Female") {
//   grade = 87;
//   console.log(grade);
// } else if (studentGender1 == "Male") {
//   grade = 90;
//   console.log(grade);
// }



// //2. Switch Cases
// let trafficLight = "green";

// switch (trafficLight) {
//   //red case
//   case "red":
//     console.log("STOP");
//     break;

//   //amber case
//   case "amber":
//     console.log("GET READY");
//     break;

//   //green case
//   case "green":
//     console.log("GO");
//     break;

//   default:
//     console.log("YOU DON'T HAVE A CAR");
//     break;
// }

// let studentScore = 81;

// switch (true) {
//   case studentScore > 79:
//     console.log("A");
//     break;

//   case studentScore > 64:
//     console.log("B");
//     break;

//   case studentScore > 44:
//     console.log("D");
//     break;

//   default:
//     console.log("F");
//     break;
// }


// //3. loops
// //for loop 
// // - best know for counting or when number of steps are known
// // - use this wneb you know how many times you want to run your code

// let savings = 0;

// for (let week = 1; week <=5; week ++){
//     savings = savings + 200
//     console.log(
//         "Week" + week + ": You now have KES" + savings
//     );
// }

// for(let i =10; i >0;i--){
//     console.log(
//         i + " seconds left"
//     )
// }




//for...of loop - best known for going through each item in a list

const students = ["Alice","James","Sheila","Daniel"]
// console.log(students)
// console.log(students[0])
// console.log(students.length)

for(const name of students){
  console.log(
    "Hello, " + name + "!"
  )
}



//for...in loop - best known for iterrating over the properties of an object

const user = {
  name: "Alex",
  age: 36,
  city: "Nairobi",
  married: false,
};
console.log(user);
console.log(user.name);
console.log(user["name"]);
console.log(user.length);


//while...loop - best known for repeating until a condition is met
let waterInBottle = 0
while(waterInBottle < 10){
  waterInBottle=waterInBottle + 1

  //display the total liters in bottle
  console.log(
    "Bottle has " + waterInBottle + " liters"
  )
}

//4. objects
//5. methods
//6. function
