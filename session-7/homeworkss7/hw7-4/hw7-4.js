console.log("Ex.4 - Rank check");
let x = prompt("Input the average grade: ");
x = Number(x);
if (x >= 0 && x <= 10) {
  if (x < 5) {
    console.log("Rank F");
    alert("Rank: F");
  } else if (x >= 5 && x < 7) {
    console.log("Rank C");
    alert("Rank: C");
  } else if (x >= 7 && x < 9) {
    console.log("Rank B");
    alert("Rank: B");
  } else {
    console.log("Rank A");
    alert("Rank: A");
  }
} else {
  alert("WTF is that");
}
