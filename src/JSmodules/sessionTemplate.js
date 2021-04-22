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

var getOptionValue = new Promise((resolve, reject) => {
    document
      .getElementById('toggle')
      .addEventListener('change', function (evt) {
        var selectedOptionValue = evt.currentTarget.value;
        resolve(selectedOptionValue);
      }
  );
});


 getOptionValue.then(
   function(evt){
     console.log(typeof(evt))
   }
 )

 getOptionValue.then(
 function displayRawDatasessions(evt) {
  getUsers().then((data) => {
    for(var i in data){
      if(data[i].id === +evt){
        let myArrays= data[i]
        console.log(typeof(myArrays));
        let rawOutputHead = '';
        let rawOutputBody = '';

        let keys = Object.keys(myArrays);
        for (let i = 0; i < keys.length; i++) { 
          console.log(keys[i], myArrays[keys[i]]);      
        rawOutputHead += `<th>${keys[i]}</th>`;
        rawOutputBody += `<td>${myArrays[keys[i]]}</td>`;

  global.document.getElementById('raw-data-head').innerHTML = rawOutputHead;
  global.document.getElementById('raw-data-body').innerHTML = rawOutputBody;

}; 

}     
 }
  })
 })

 //displayRawDatasessions();
/*
      
*/



/*Handling button click in promises
  // ideal for a single button click
  var buttonPromise = new Promise((resolve,reject)=>{
    document.getElementById('toggle').addEventListener('change',resolve);
  });

  buttonPromise.then(
    function onfulfillment(evt){
    var btnId = evt.currentTarget.value;
    console.log(btnId);
    },

    function rejected(evt){
      console.log(evt);

    }
  )
  .then(
    null,
    function onrejection(err){    //to catch the error on reading target value
      console.log(err)
    }
  )
*/



/* data.forEach((elements,index,array) =>{
        console.log(elements);
    let output = " ";
        output +=
      `<div class="tile cf">
            <h3>Currently Infected</h3>
            <div class="data">
                <div class="column1">
                    <div class="normal title">Normal</div>
                    <div class="units" id="units">${elements.avgAge}</div>
                </div>
                <div class="column1">
                    <div class="severe title">Severe</div>
                    <div class="units">500m</div>
            </div>
            <p>50X more people infected than known cases</p>
        </div>`;
        
        global.document.getElementById('main--body').innerHTML=output;*/
//});
// });
//}


