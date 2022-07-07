let x = prompt('Input the 1/3 integer number: ');
let y = prompt('Input the 2/3 integer number: ');
let z = prompt('Input the 3/3 integer number: ');
console.log(x);
console.log(y);
console.log(z);
console.log('highest number among 3 is: ');
    if (x > y && x > z) {
        console.log(x);
        alert(`${x} is the highest integer number.`);
    } else if (y > x && y > z) {
        console.log(y);
        alert(`${y} is the highest integer number.`);
    } else if (z > x && z > y) {
        console.log(z);
        alert(`${z} is the highest integer number.`);
    } else {
        console.log('wTf');
        alert('there are more than 1 highest number among 3');
    }