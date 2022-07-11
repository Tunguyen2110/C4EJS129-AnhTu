//Cho hai số A và B là hai số nguyên dương và A phải nhỏ hơn B (0 < A < B < 100).
// Viết chương trình cho phép nhập hai số A và B đó từ bàn phím:
// * Tìm số nguyên tố từ A > B.
// * Tìm ước bội chung lớn nhất của A và B.
let a = Number(prompt("Nhap so A nguyen duong: "));
let b = Number(prompt("Nhap so B nguyen duong lon hon A: "));
if (a > 0 && b > a) {
  if (a == Number.isInteger && b == Number.isInteger) {
    for (let i = a; i <= b; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }
} else {
  console.log("Nhap sai, yeu cau nhap lai");
}
