// First install xmlhttprequest dependece in the terminal (npm install xmlhttprequest --save)

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // Instance xmlhttprequest

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);

        // Verifing the info load
        xhttp.onreadystatechange = () => {
            if(xhttp.readyState === 4) { // Using Ternary Operator
                (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error'+url_api))
            }
        }
        xhttp.send();
    });  
};

module.exports = fetchData;