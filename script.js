// "use strict";
// //--------------------Practice----------------------------
// let test = { name: "Brandon", class: "FE" };
// console.log(test.name);
// test.name = "Brandon Robinson";
// console.log(test.name);

// let testArray = [
//   { name: "Brandon", class: "FE" },
//   { name: "Mitch", class: "FE" },
// ];

// console.log(testArray[0].name);
// testArray[1].name = "Mitttcchh";

// //human represents an object in the array
// //testArray.foreach to allow us to loop through the array
// //human is representing an object while name is referencing the parameter in the name in testArray
// //use a forEach loop to look at each item in the array
// //refer  to each item as humans
// //log the value of the name property from each object (human)
// testArray.forEach((human) => {
//   console.log(human.name);
// });

//-----------------------------------LAB------------------------------------

//#1
let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

//#2 TEST WILL DO SOMETHING LIKE THIS  PUSHING AN OBJECT INTO THE ARRAY
const addSubmission = (array, newName, newScore, newDate) => {
  let newSubmission = {
    //key: value
    name: newName,
    score: newScore,
    date: newDate,
    //for V if the newScore is greater than or equal to 60 it will be true or pass if below it will be false or fail
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};

addSubmission(submissions, "brandon", 89, "2018-05-14");
// console.log(submissions);

//#3 DELETING SOMETHING FROM AN ARRAY
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

//#4
// Declare a function named deleteSubmissionByName
//○Parameter(s): array , name
//○Functionality: remove the object from the array that has the provided name . Incorporate the findIndex method and the splice method.

const deletesubmissionByName = (array, name) => {
  // must declare variable targeted index
  let targetedindex = array.findIndex((student) => {
    return student.name === name;
  });
  array.splice(targetedindex, 1);
};

// deletesubmissionByName(submissions, "Jack");
// console.log(submissions);

//#5
const editSubmission = (array, index, updatedScore) => {
  // [index] tells us we're looking at an index number in the array
  // this updates the score
  array[index].score = updatedScore;
  // this updates whether the student passed
  array[index].passed = updatedScore >= 60 ? true : false;
};
editSubmission(submissions, 2, 93);
console.log(submissions);

//#6 USING THE FIND METHOD TO FIND A SUBMISSION BY NAME
const findSubmissionByName = (array, nameLookingFor) => {
  let found = array.find((foundName) => {
    return foundName.name === nameLookingFor;
  });
  //adding .name or .score after found will give us just that value in the console
  return found;
};
console.log(findSubmissionByName(submissions, "Joe"));

//bracket notation allows you to look at a certain element in an array
//dot notation allows you to look at a certain parameter

//#7 FINDING THE LOWEST SCORE OBJECT IN THE ARRAY
const findLowestScore = (array) => {
  // this tells us we're starting at the first number in the array
  let lowestScore = array[0];
  //this allows us to go through each person in the submissions array
  array.forEach((person) => {
    // if the score of the person in the array in lower than the first score then it returns that score
    if (person.score < lowestScore.score) {
      //the lowestScore is equal to the person (object in the array) that got the lowest score
      lowestScore = person;
    }
  });
  return lowestScore;
};
// console.log(findLowestScore(submissions));

//#8
const findAverageScore = (array) => {
  let sum = 0;
  for (let item of array) {
    sum += item.score;
  }
  return sum / array.length;
};

console.log(findAverageScore(submissions));

//#9

const filterPassing = (array) => {
  let newArray = array.filter((item) => {
    return item.score >= 60;
  });
  return newArray;
};
console.log(filterPassing(submissions));

//#10

const filter90AndAbove = (array) => {
  let newArray = array.filter((obj) => {
    return obj.score >= 90;
  });
  return newArray;
};

console.log(filter90AndAbove(submissions));
