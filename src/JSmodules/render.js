import { dataPromise } from './index';
import fs from 'fs';
import Chart from 'chart.js/auto';

/*
dataPromise.then((evt)=>{
  renderAll('impact','normalCurrentlyInfected',evt); 
  renderAll('severeImpact','severeCurrentlyInfected',evt); 
}) */

//id1 is the returned object on severity
// id2 is the HTML element to be updated with the value

function renderAll(id1, id2, evt) {
  let someProd = id1;
  if (someProd in evt) {
    let calculatedCurrentInfection = document.getElementById(id2);
    let output = '';
    output += `${evt[someProd].currentlyInfected}`;
    calculatedCurrentInfection.innerHTML = output;
  }
}


async function getData(queries) {
  const endpoint = 'https://api.coronavirus.data.gov.uk/v1/data?';
  const response = await fetch(endpoint + queries);
   const data = await response.json();
  //console.log(data);
  return data;
}

async function main() {
  const AreaType = 'nation',
  //const AreaNameArray = ['england','wales','scotland']
  AreaName = 'england';
  const filters = [`areaType=${AreaType}`,`areaName=${AreaName}`],
    structure = {
      date: 'date',
      name: 'areaName',
      code: 'areaCode',
      dailyCases: 'newCasesByPublishDate',
      casesCumulative: 'cumCasesByPublishDate',
      deathsDaily: 'newDeaths28DaysByPublishDate',
      deathsCumulative: 'cumDeaths28DaysByPublishDate',
      firstVaccinationsDaily: 'newPeopleVaccinatedFirstDoseByPublishDate',
      firstVaccinationsCumulative: 'cumPeopleVaccinatedFirstDoseByPublishDate',
      secondVaccinationsDaily: 'newPeopleVaccinatedSecondDoseByPublishDate',
      secondVaccinationsCumulative:
        'cumPeopleVaccinatedSecondDoseByPublishDate',
    };

  //for ( const area of AreaNameArray ) {
     // const apiParams = `filters=${filters.join(';')};areaName=${area}&structure=${JSON.stringify(structure)}`,
      const apiParams = `filters=${filters.join(';')}&structure=${JSON.stringify(structure)}`,
      encodedParams = encodeURI(apiParams);
      return encodedParams;
 // }
  
}
async function fetchData(x){
  //JSON.stringify(x);
   const{data} = x;
   const keysArray = Object.keys(data[1]);
   const valuessArray = Object.values(data[1]);
   //console.log(data[1].date);
   //console.log(keysArray);
   //console.log(valuessArray);
  return [valuessArray, keysArray];
}
main()
.then(  function(params){
   return getData(params)
  //console.log(params);
})
.then(
   function(data){
  return fetchData(data);
   
  })
  .then(
      function (valuesArray) {
        return valuesArray[0]
      }
  
)
.then(
  function(dataSets){
    createChart(dataSets)
  }
)
.catch(function(reason){
  console.log(reason)
})

function createChart(dataSets){
const ctx = document.getElementById('myChart').getContext('2d');
const xLabels = dataSets[0];
const yLables = dataSets[1];
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
       // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
       labels: xLabels,
        datasets: [{
            label: '# of Votes',
            //data: [12,8,2,4,5,8],
            data : yLables,
            //data: main(),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}
