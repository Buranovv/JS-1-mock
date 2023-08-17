/* Exercise №2*/
const num = 1611;
const toStr = num.toString();
const toArr = toStr.split("");

function namd(number) {
  const reversed = toArr.reverse();
  const toStr2 = reversed.join("");
  if (toStr2 == toStr) {
    console.log(true);
  } else {
    console.log(false);
  }
}

namd(toArr);
