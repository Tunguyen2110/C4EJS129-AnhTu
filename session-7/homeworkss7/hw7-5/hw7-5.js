let x = prompt("Nhap doanh so ban hang cua cong ty: ");
x = Number(x);
console.log(`Sales: ${x}`);
if (x <= 100000000) {
  y = x * 0.05;
  console.log(y);
  alert(`Tien hoa hong cua cong ty nhan duoc: ${y}`);
} else if (x <= 300000000 && x > 100000000) {
    y = x * 0.1;
    console.log(y);
    alert(`Tien hoa hong cua cong ty nhan duoc: ${y}`);
} else {
    y = x * 0.2;
    console.log(y);
    alert(`Tien hoa hong cua cong ty nhan duoc: ${y}`);
}
