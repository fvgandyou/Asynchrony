// First install xmlhttprequest dependece in the terminal (npm install xmlhttprequest --save)

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // Instance xmlhttprequest

const API = 'https://rickandmortyapi.com/api/character/'; // Calling the API

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);

    // verifing the info load
    xhttp.onreadystatechange = function(event) {
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error '+url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(API, (error1, data1) => {
    if(error1) return console.error(error1); // data1 is the initial info API
    fetchData(API + data1.results[2].id, function(error2, data2) {
        if(error2) return console.error(error2); // data2 is the specific info of API item
        fetchData(data2.origin.url, (error3, data3) => {
            if(error3) return console.error(error3); // data3 is the inner specific info of API item selected
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.type);
        })
    })
});

// Another example

const API2 = 'https://api.escuelajs.co/api/v1';

fetchData(`${API2}/products`, function (error1, data1) {
    if(error1) return console.error(error1);
    fetchData(`${API2}/products/${data1[0].id}`, function (error2, data2) {
        if(error2) return console.error(error2);
        fetchData(`${API2}/categories/${data2.category.id}`, function (error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});