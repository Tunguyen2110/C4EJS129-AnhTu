console.log('Ex1:');
let x = prompt('Input your salary/payment: ');
if (x < 7000000) {
    let i = x * 0.9;
    console.log(i);
    alert(`Your actual payment is: ${i} đ`);
} else if (x >= 7000000 && x <15000000) {
    let i = x * 0.8;
    console.log(i);
    alert(`Your actual payment is: ${i} đ`);
} else {
    let i = x * 0.7;
    console.log(i);
    alert(`Your actual payment is: ${i} đ`);
}