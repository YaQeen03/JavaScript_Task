var even_number = 0;
var odd_number = 0;

function sum_number ( number) {
for (var i = 0; i <= number; i++) {
    if (i % 2 == 0) {
        even_number += i;
    }
     else {
        odd_number += i;
    }
}

console.log("Sum of even :", even_number);
console.log("Sum of odd  :", odd_number);
}
sum_number(210);