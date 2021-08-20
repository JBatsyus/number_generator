

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let randomNumb = [];
for (let i = 0; i < 10; i++) {
    randomNumb.push(getRandomIntInclusive(-10, 10));
    document.getElementById('randomNumb').innerHTML = randomNumb;
}


let arr = randomNumb;
let minNum = Math.min.apply(null, arr);
document.getElementById('minNum').innerHTML = minNum;

let maxNum = Math.max.apply(null, arr);
document.getElementById('maxNum').innerHTML = maxNum;

let averageNum = arr.reduce((a, b) => a + b, 0) / arr.length;
document.getElementById('averageNum').innerHTML = averageNum;

let sumNum =  arr.reduce((a, b) => a + b, 0);
document.getElementById('sumNum').innerHTML = sumNum;
 
let multik =  arr.reduce((a, b) => a * b);
document.getElementById('multik').innerHTML = multik;

// document.getElementById('randomNumb').innerHTML = "";
// document.getElementById('minNum').innerHTML = "";
// document.getElementById('maxNum').innerHTML = "";
// document.getElementById('averageNum').innerHTML = "";
// document.getElementById('sumNum').innerHTML = "";
// document.getElementById('multik').innerHTML = "";



