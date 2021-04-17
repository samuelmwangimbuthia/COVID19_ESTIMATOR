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




function getInputValue() {
  return new Promise(function (resolve, reject) {
    let rawData = document.getElementById('toggle2').value; 
    if (rawData) {
      resolve(document.getElementById('toggle2').value)
    } else {
      reject('error occurred');
    }
  });
}

getInputValue().then(
  function fufilled(x) {
    console.log(x);
  },
  function rejected(x) {
    console.log(x);
  }
);
/*let rawData = document.getElementById('toggle').value;

let period = document.getElementById('periodToggle').value;
console.log(delay())
/*
function p(x){
  new Promise((reject,resolve)=>{
  document.getElementById('toggle')
})
.then((p)=>{
  console.log(p.value);
})



function add(fetchX,fetchY){
  return Promise.all([fetchX, fetchY]) //immediately executed not async deffered
    .then(function(values_1){
  return values_1[0] + values_1[1];
    })
};

add(delay(),period)
  .then(function(sum){
    console.log(sum)
})


export function sessions() {
  getUsers().then((data) => {
    let regionRawData;
    regionRawData = data.filter((element) => element.avgAge === rawData);
    console.log(regionRawData);
  });
}
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

/*export function displayRawDatasessions() {
  getUsers().then((data) => {
    data.forEach((elements) => {
      let rawOutput = ' ';
      rawOutput += `<tr>
            <td>${elements.avgAge}</td>
            <td>${elements.avgDailyIncomeUSD}</td>
            <td>${elements.avgDailyIncomePopulation}</td>
            <td>${elements.periodType}</td>
            <td>${elements.timeToElapse}</td>
            <td>${elements.reportedCases}</td>
            <td>${elements.population}</td>
            <td>${elements.totalHospitalBeds}</td>
             </tr>`;

      global.document.getElementById('raw-data').innerHTML = rawOutput;
    });
  });
}
*/
