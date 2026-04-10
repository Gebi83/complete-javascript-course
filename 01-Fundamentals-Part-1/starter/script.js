// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
//
// console.log('Jonas');
// console.log(23);
//
// let firstName = 'Bob';
//
// console.log(firstName);
//
// let country = "Germany";
// let continent = "Europe";
// let population = 83;
//
// console.log(country);
// console.log(continent);
// console.log(population);
//
// let year;
// console.log(year);
// console.log(typeof year);
//
// year = 1991;
// console.log(year);
// console.log(typeof year);
//
// console.log(typeof null);

// let age = 30;
// age = 45;

// const birthYear = 1991;
// // birthYear = 1990;
//
// // const job;
//
// // lastName = "Gebert";//dont use this! global var!
// // console.log(lastName);
//
//
// const now = 2026;
// const ageGebi = now - 1983;
// const ageZoe = now - 2007;
// console.log(ageGebi, ageZoe);
//
// console.log(ageGebi *2, ageGebi / 10, 2 ** 3)
//
// const firstName = 'Manuel'
// const lastName = 'Gebert';
//
// console.log(firstName + ' ' +  lastName);
//
//
// let x = 10 + 5;
// x+= 10; // x = x + 10
//
// console.log(x);
//
//
// console.log(ageGebi > ageZoe);


// const firstName = "John";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2026;
//
// const manuel =  "I'm " + firstName + ", a " + (year - birthYear) + ' year old ' + job ;
//
// console.log(manuel);
//
// const manuelNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
//
// console.log(manuelNew);
//
// console.log('String with \n\
//   multiple \n\
//   lines');
//
// console.log(`String
// with
// multiple
// lines`);


// const age = 15;
//
// if(age >= 18) {
//   console.log('Sarah can start driving license 🚗');
// } else {
//   console.log(`Sarah needs ${18 - age} years`);
// }
//
// const birthYear = 1991;
//
// let century;
//
// if(birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
//
// console.log(century);

// //type conversion
// const inputYear =  '1991';
// console.log(Number(inputYear), inputYear);
//
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);
//
// console.log(Number('Gebi'));
//
// console.log(typeof NaN);
//
// console.log(String(NaN), String(23), 23);
//
// //type coercion
// console.log('I am ' + 23 + ' years old');
//
// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23' * '2');
// console.log('23' / '2');
//
// let n = '1' + 1;
// n = n - 1
// console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 0;

if(money){
  console.log("Don't spend it all");
} else {
  console.log("Get a job!");
}


let height = 0;

if(height){
  console.log("Here is the height");
} else {
  console.log("No height");
}

