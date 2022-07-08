console.log("Giai phuong trinh bac 2");
console.log("ax^2 + bx +c = 0");
let a = prompt("Nhap a: ");
let b = prompt("Nhap b:");
let c = prompt("nhap c: ");

if (a == 0 && b == 0 && c == 0) {
  console.log("WTF???");
  alert("WTF bro isnt it always true that 0 = 0 ??");
}
if (a != 0 && b == 0) {
  if (-c/a  == 0) { 
    alert(`Ptrinh co 1 nghiem x = ${0} `);
  } else if (-c/a <0) {
    alert('Vo nghiem');
  } else {
    alert(`Phuong trinh co 2 nghiem: \n
    x1 = ${Math.sqrt(-c/a)} \n
    x2 = ${-Math.sqrt(-c/a)}`);  
  }
}

if (a == 0 && b == 0) {
  console.log("vo nghiem");
  alert("Phuong trinh vo nghiem");
}

if (a == 0 && b != 0) {
  console.log(-c / b);
  alert(`Phuong trinh co 1 nghiem x = ${-c / b}`);
}

if (a != 0 && b != 0) {
  delta = b * b - 4 * a * c;
  if (delta < 0) {
    console.log("delta < 0 - vo nghiem");
    alert(`Phuong trinh ${a}x^2 + ${b}x + c = 0 vo nghiem`);
  } else if (delta > 0) {
    x1 = ((-b + Math.sqrt(delta)) / 2) * a;
    x2 = ((-b - Math.sqrt(delta)) / 2) * a;
    console.log("delta > 0 - 2 nghiem: ");
    console.log("x1 = ", x1);
    console.log("x2 = ", x2);
    alert(
      `Phuong trinh ${a}x^2 + ${b}x + c = 0 co 2 nghiem phan biet:\n x1 = ${x1} \n x2 = ${x2}`
    );
  } else {
    alert(
      `Phuong trinh ${a}x^2 + ${b}x + c = 0 co 1 nghiem kep x = ${(-b / 2) * a}`
    );
  }
}
