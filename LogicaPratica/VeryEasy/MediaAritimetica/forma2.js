
function average(...numbers) {
    let sum = 0;

    numbers.forEach(number => sum += number);
    return sum / numbers.length;
}

console.log(average(10,9,6,8,9,1,5,7))
console.log(average(10,0))