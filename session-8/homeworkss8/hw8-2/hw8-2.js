//Cho hai số A và B là hai số nguyên dương và A phải nhỏ hơn B (0 < A < B < 100).
// Viết chương trình cho phép nhập hai số A và B đó từ bàn phím:
// * Tìm số nguyên tố từ A > B.
// * Tìm ước bội chung lớn nhất của A và B.

// let a = Number(prompt("Nhap so A nguyen duong: "));
// let b = Number(prompt("Nhap so B nguyen duong lon hon A: "));
// if (a > 0 && b > a) {
//   if (a == Number.isInteger && b == Number.isInteger) {
//     for (let i = a; i <= b; i++) {
//       if (n % i == 0) {
//         flag = false;
//         break;
//       }
//     }
//   }
// } else {
//   console.log("Nhap sai, yeu cau nhap lai");
// }

{ // Cach 1
  let number = Number(prompt("Input number: "));
  let count = 0;

  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      count += 1;
      console.log("chia het cho ", i);
    }
  }
  if (count === 2) {
    conosle.log("Day la so nguyen to");
  }
}
let number = Number(prompt("Input number: "));
{ // Cach 2 - su dung function:
  function kiemTraSoNguyenTo () {

    let count = 0;

    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        count += 1;
        console.log("chia het cho ", i);
      }
    }

    if (count === 2) {
      conosle.log("Day la so nguyen to");
    }

  }
  let x = Number(prompt(':'));
  for (let i = 1; i <= x; i++) {
    kiemTraSoNguyenTo();
  }
}