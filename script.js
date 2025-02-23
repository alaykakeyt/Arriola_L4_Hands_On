let num;
do {
    num = prompt("Enter a positive number:");
} while (isNaN(num) || num <= 0 || num.includes(".") || num.includes("-"));

num = parseInt(num);
alert(num % 2 === 0 ? "Even" : "Odd");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
