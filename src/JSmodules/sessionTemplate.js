import { getUsers } from '../api/userApi';


function selected() {
  getUsers().then((data) => {
    let newArray = data.map((element) => element.id);
    // do something with the return value
    let select = document.getElementById('toggle');
    let output = '';
    for (let i = 0; i < newArray.length; i++) {
      output += `<option id='region${i}'> ${newArray[i]} </option>`;
    }
    select.innerHTML = output;
  });
}

selected();

// return selected region inorder to update the UI respectively
 document.getElementById('toggle').addEventListener('change', async (event) => {
   try {
      var optionValue = await event.currentTarget.value;
    //console.log(optionValue)
    displayRawDataSessions(optionValue);
    } catch (err) {
      console.error(err);
       } 
  });


//Updating the footer with the selected region value
function displayRawDataSessions(optionValue) {
    console.log(optionValue);
   getUsers().then((data) => {
     for(var i in data){
       if(data[i].id === +optionValue){
         let myArrays= data[i]
         let rawOutputHead = '';
         let rawOutputBody = '';
  
         let keys = Object.keys(myArrays);
         for (let i = 0; i < keys.length; i++) { 
 //          console.log(keys[i], myArrays[keys[i]]);      
         rawOutputHead += `<th>${keys[i]}</th>`;
         rawOutputBody += `<td>${myArrays[keys[i]]}</td>`;
 
   global.document.getElementById('raw-data-head').innerHTML = rawOutputHead;
   global.document.getElementById('raw-data-body').innerHTML = rawOutputBody;
 
 }; 
 
 }     
  }
   })
  }

