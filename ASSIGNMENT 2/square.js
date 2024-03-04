// Function to square a number
function square(number) {
  return number * number;
}

// Looping from 1 to 10 and printing the square of each number
for (let i = 1; i <= 10; i++) {
  const squaredNumber = square(i);
  console.log(`${i}^2 = ${squaredNumber}`);
}