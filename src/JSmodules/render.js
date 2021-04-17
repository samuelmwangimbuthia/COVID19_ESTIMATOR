import { sessions } from './sessionTemplate';
import { getUsers } from '../api/userApi';
/*
export default function render() {
  return selected();
}

// Create a selection list for all the available regions

function selected() {
  getUsers().then((data) => {
    let newArray = data.map((element) => element.id);
    // do something with the return value
    let select = document.getElementById('toggle');
    let output = '';
    for (let i = 0; i < newArray.length; i++) {
      output += `<option class='region'> ${newArray[i]} </option>`;
    }
    select.innerHTML = output;
  });
}





/*toggle.addEventListener('change', function(){
    if(id===19876635){
        render();
    }
}); */

//export default render;
