function sum(num1, num2) {
    return num1+num2;
}

// Design callback to reference another function returning inside of the other

function calculate(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calculate(2, 2, sum));

// Another example

function printDate(dateNow) {
    console.log(dateNow);
}

function date(callback) {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date)
    }, 3000);
}

date(printDate);

// Another example 
setTimeout(function () {
    console.log('Hi Javascript');
}, 2000);

function gretting(name) {
    console.log(`Hi ${name}`);
}

setTimeout(gretting, 4000, 'Ferney');