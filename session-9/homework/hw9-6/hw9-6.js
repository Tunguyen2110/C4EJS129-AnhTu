// Viết hàm với 2 tham số đầu vào đều là 2 mảng
// thực hiện so sánh tổng 2 mảng này, hiển thị kết quả của việc so sánh

{
  //use for (let ... of arrayName) { console.log(...) -> print all array's index}
  console.log("Ko dung function: ");
  //   let x = Number(prompt("Nhap so phan tu cua mang 1: "));
  //   arr1 = [];
  //   for (let i = 0; i < x; i++) {
  //     arr.push(prompt("Enter a number: "));
  //   }
  //   console.log(arr1);

  //   let y = Number(prompt("Nhap so phan tu cua mang 1: "));
  //   arr2 = [];
  //   for (let i = 0; i < y; i++) {
  //     arr.push(prompt("Enter a number: "));
  //   }
  //   console.log(arr2);

  const array1 = [1, 3, 5, 7, 9];
  let sum = 0;
  for (let number of array1) {
    // for of - ko biet dc vi tri index cua phan tu || Con for i/in = ... thi dc (lam viec vs index)
    sum += number;
  }
  console.log(sum);

  const array2 = [2, 4, 6, 8, 10];
  let sum2 = 0;
  for (let number of array2) {
    // for of - ko biet dc vi tri index cua phan tu || Con for i/in = ... thi dc (lam viec vs index)
    sum2 += number;
  }
  console.log(sum2);

  //so sanh:
  if (sum1 > sum2) { console.log('1 > 2')}

}

{
  console.log("su dung function cho nhanh hon: ");

function calSum(arrNumber) {
    let sum = 0;
    for (let number of arrNumber) {
        sum += number;
    }
    return sum;
}
    if (calSum(number1) > calSum(number2)) {
// check git hub
    };

}

