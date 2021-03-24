
import { sessions } from './sessionTemplate';


function render(){

return sessions();
};

//display estimates based on the selected region
let toggle = document.getElementById("toggle");
toggle.innerHTML=selected;

function selected(){
    getUsers().then((data)=>{
        data.forEach((elements) =>{
            let output = "";
            output +=
            `<option>${elements.id}</option`
        
    })})}

/*toggle.addEventListener('change', function(){
    if(id===19876635){
        render();
    }
}); */



export default render;

