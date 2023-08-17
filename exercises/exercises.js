// /* Exercise №1*/



// /* Exercise №2*/
// const num = 165651;
// const toStr = num.toString();
// const toArr = toStr.split("");

// function namd(number) {
//   const reversed = toArr.reverse();
//   const toStr2 = reversed.join("");
//   if (toStr2 == toStr) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// namd(toArr);

/* Exercise №3*/
const year = 209;

if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
  console.log(`${year} is Leap year`);
} else {
  console.log(`${year} is not Leap year`);
}
