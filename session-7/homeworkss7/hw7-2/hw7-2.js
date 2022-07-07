let x = prompt("Input the kiddo's age: ");
if (x >= 16) {
    alert (`${x} is old enough to reach 10th Grade.`);
} else {
    alert (`${x} is NOT old enough to reach 10th Grade, please comback after: ${16-x} years`);
}
