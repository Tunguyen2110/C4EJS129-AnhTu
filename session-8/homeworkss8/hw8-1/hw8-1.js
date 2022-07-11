// Nhập một chuỗi bất kì
// Tìm tổng số lượng kí tự trong chuỗi vừa nhập ko tính dấu cách
let x = prompt("Input a string: ");
console.log("input string is: " + x);
let count = 0;
for (let i = 0; i < x.length; i++) {
  if (x[i] == " ") {
    continue;
  }
  count++;
}
console.log("string's length without space is:");
console.log(count);