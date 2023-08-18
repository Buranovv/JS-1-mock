/* Exercise №1 */
// const arr = [2, 5, -4, 6, -5];

// function sorter() {
//   //Counter
//   const arrFilterCount = arr.filter((element) => {
//     return element >= 0;
//   });
//   let count = 0;
//   arrFilterCount.forEach((element) => {
//     count = count + 1;
//   });
//   console.log(count);

//   //Sum counter
//   const arrFilterSum = arr.filter((element) => {
//     return element < 0;
//   });
//   let sum = 0;

//   arrFilterSum.forEach((element) => {
//     sum = sum + element;
//   });
//   console.log(sum);
// }
// sorter();

/* Exercise №2 */
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

/* Exercise №3 */
// const year = 209;

// function findLeap() {
//   if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
//     console.log(`${year} is Leap year`);
//   } else {
//     console.log(`${year} is not Leap year`);
//   }
// }

// findLeap();

/* Exercise №4 1-way */
// const num = [1, -4, 4, -2, 4, -5];

// function findNegative(array) {
//   const newArr = [];
//   num.forEach((element) => {
//     if (element < 0) {
//       newArr.push(element);
//     }
//   });
//   console.log(newArr);
// }

// findNegative(num);

/* Exercise №4 2-way */
const num = [1, -4, 4, -2, 4, -5];

function negatives(array) {
  console.log(array.filter((element) => element < 0));
}

negatives(num);
