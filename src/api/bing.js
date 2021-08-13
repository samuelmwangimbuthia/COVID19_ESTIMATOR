let xhr = new XMLHttpRequest();
xhr.open('GET','https://github.com/microsoft/BingCoronavirusQuerySet',true);
xhr.onload= function(){
if(this.status===200){
console.log(this.responseText)}
}
xhr.send();