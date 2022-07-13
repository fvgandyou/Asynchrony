const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!');
        } else {
            reject('Whooops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err));

// Another example, using Ternary Operator ? -> :

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => true 
        ? setTimeout(() => {resolve('True');}, 2000)
        : reject(error = new Error('Whoops!'))
    );
};

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err));

// Execute all promises

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    });

//Another example
const cows = 15;

const countCows = new Promise(function (resolve, reject) {
    if(cows > 10) {
        resolve(`We have ${cows} cows in the farm`);
    } else {
        reject("There is no cows on the farm");
    }
});

countCows.then((result) => {
    console.log(result);
}).catch(error => console.log(error)).finally(() => console.log('Finally'));