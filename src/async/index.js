const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        true
        ? setTimeout(() => resolve('Do Something Async'), 3000)
        : reject(new Error('Test Error'))
    });
}

const doSomething = async() => {
    const something = await doSomethingAsync();
    console.log(something);
};

console.log('Before');
doSomething();
console.log('After');

// Manager errors

const anotherFunction = async() => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch { // Push (error) after of catch is not important to ECMAScript update, is inner of JS configuration
        console.error(new Error('Test Error'));
    }
};

console.log('Before 1');
anotherFunction();
console.log('After 1');
