import { ResolvePlugin } from "webpack";

const sessionURL = './sessions.json';
let sessionList = [];



function getSession(){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.onload = function (users){
            sessionlist = users.target.responce;
            resolve(sessionList);
        };
    
        xhr.open('GET',sessionURL,true);
        xhr.responseType = 'json';
        xhr.send();

    });


}

export default getSession;