function nextNumber(x1, x2) {
    return x1 + x2;
}
let array = [0, 1];
let sum = array[0] + array[1];
for (let i = 0; i < 27; i++) {
    let nextNum = nextNumber(array[i], array[i + 1]);
    array[i + 2] = nextNum;
    sum += nextNum;
    console.log(nextNum);
    console.log(sum);
}
//# sourceMappingURL=main.js.map