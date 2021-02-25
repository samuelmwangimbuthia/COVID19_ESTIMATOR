import covid from './index.js';
import '../styles/styles.css';
import render from './render';


render();

/*
fetch('./src/JSmodules/data.js')
    .then(res => {
        res.json()
    })
    .then(data=> console.log(data));

*/

function getSession(){
    return new Promise(function(resolve,reject){
        // create XHR object
        var xhr = new XMLHttpRequest();
        // open method

        xhr.open('GET','sessions.json',true);
        xhr.onload = function(){
            var users = (this.responseText);
            console.log(users);
        }

        xhr.send();

    })

};

getSession();

console.log(covid.impact.hospitalBedsByRequestedTime(464));