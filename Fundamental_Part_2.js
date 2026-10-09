'use strict';
//Function Declaration
// console.log("Shamoon " + calcAge1(1985));
// function calcAge1(birthYear) {
//     return 2025 - birthYear;
// }

// //Function Expression
// const age2 = function (birthYear) {
//     return 2025 - birthYear;
// }
// console.log("Sheerin " + age2(1991));

// //Arrow Expression
// const calcAge3 = birthYear => 2025 - birthYear;
// console.log("Hassana " + calcAge3(1990));

// const yrsUntilRetirement = (birthYear, firstName) => {
//     const age = 2025 - birthYear;
//     const retirementAge = 65 - age;
//     return `${firstName} retires at ${retirementAge}`;
// }
// console.log(yrsUntilRetirement(1985, "Shamoon"));
// console.log(yrsUntilRetirement(1991, "Sheerin"));
// console.log(yrsUntilRetirement(1990, "Hassana"));

// function fruitProcessor(apples, oranges) {
//     return `Juice with ${apples} apples and ${oranges} oranges`;
// }
// console.log(fruitProcessor(2, 5));

// const friends = ["Shamoon", "Sheerin", "Haleem", "Humaira", "Musfira", "Faisal", "Raheem", "Hamza"];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 6]);
// const shamoon = ["Shamoon Mohamed Ilyas", "Male", 40, "Married", "Software Engineer"];
// console.log(shamoon.length);
// console.log(shamoon[0]);
// console.log(shamoon[2]);
// console.log(Number(shamoon[2]));
// console.log(String(shamoon[2]));

// const friends = ["Shamoon", "Haleem", "Syed", "Rafeeq"];
// const newfriend = friends.push("Farman");
// console.log(friends.length);
// console.log(friends.pop());
// console.log(friends.length);
// console.log(friends.shift());
// console.log(friends.length);
// console.log(friends.includes('Shamoon'));
// console.log(friends.includes('Haleem'));
// console.log(friends.indexOf('Haleem'));

// const calcTip = billValue => {
//     if (billValue >= 50 && billValue <= 300) {
//         return ((15 * billValue) / 100);
//     }
//     else {
//         return ((20 * billValue) / 100);
//     }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// const shamoon = {
//     firstName: "Shamoon",
//     lastName: "Mohamed Ilyas",
//     age: 40,
//     job: "Software Engineer",
//     friends: ["Haleem", "Farman", "Sheerin", "Humaira"],
//     hasDriverLicense: true,
//     calcAge: function () {
//         console.log(this);
//         return this.birthYear = 2025 - this.age;
//     },
//     getSummary: function () {
//         this.calcAge();
//         return `${this.firstName} is a ${this.birthYear}-year old ${this.job} and has ${this.hasDriverLicense ? "a" : "no"} drivers license}`
//     }
// }
// console.log(shamoon.calcAge());
// console.log(shamoon.getSummary());
// console.log(shamoon['calcAge'](1985));

// const inputs = prompt("What do you want to know about Shamoon ? Choose between firstName, lastName, age, job, friends");
// shamoon.location = "Bangalore";
// shamoon.mailId = "shamoonece@gmail.com";
// if (shamoon[inputs]) {
//     console.log(shamoon[inputs])
// } else {
//     console.log("Wrong input, Select anything from firstName, lastName, age, job, friends");
// }

// console.log(shamoon);

// console.log(`${ shamoon.firstName } has ${ shamoon.friends.length } friends and his best friend is called ${ shamoon.friends[0]}`)

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }
// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi);
// console.log(john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repition ${rep}`);
// }

// const years = [1983, 1985, 1987, 1990, 1991];
// const ages = [];
// // console.log(ages.length);
// // console.log(years.length);
// // ages.push(2025 - years[0]);
// // ages.push(2025 - years[1]);
// // console.log(ages[0], ages[1]);
// for (let i = 0; i < years.length; i++) {
//     if (years[i] === 1985) break;
//     console.log(years[i]);
//     ages.push(2025 - years[i]);
// }

// console.log(years.length);

// let correct = [3, 5, 7, 1, 10];

// let reverse = [];

// for (let i = correct.length - 1; i >= 0; i--) {
//   reverse.push(correct[i]);
// }

// console.log(reverse);
// function summarizeWeeklyHours(dailyHours) {
//   /**
//    * Summarizes weekly work hours.
//    *
//    * @param {number[]} dailyHours - Array of daily work hours for a week, starting from Monday.
//    * @returns {object} Summary of the week.
//    */
//   if (dailyHours.length !== 7) {
//     throw new Error(
//       'The input array must contain exactly 7 elements, one for each day of the week.'
//     );
//   }

//   // Calculate total hours
//   const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

//   // Calculate average daily hours
//   const averageDailyHours = totalHours / 7;

//   // Find the day with the most hours worked
//   const maxHours = Math.max(...dailyHours);
//   const dayWithMostHours = dailyHours.indexOf(maxHours) + 1; // 1 = Monday, 7 = Sunday

//   // Count the number of days worked (hours > 0)
//   const daysWorked = dailyHours.filter((hours) => hours > 0).length;

//   // Determine if the week was full-time (40 hours or more)
//   const isFullTime = totalHours >= 40;

//   // Return the summary
//   return {
//     totalHours,
//     averageDailyHours,
//     dayWithMostHours,
//     daysWorked,
//     isFullTime,
//   };
// }

// // Example usage
// const dailyHours = [8, 9, 7.5, 8, 6, 5, 0]; // Monday to Sunday
// const summary = summarizeWeeklyHours(dailyHours);
// console.log(summary);

// const numbers = [1, 2, 5, 7, 9, 12, 24, 56, 120];
// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(sum);

// const average = Math.round(50.1);
// console.log(average);

const number = [10, 12, 13, 22, 50, 79, 80, 99];
// const secondHalf = number.filter((num) => num > 50);
// console.log(secondHalf);
const maxNum = Math.max(...number);
console.log(maxNum);
