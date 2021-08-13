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
 // return data;
  await fetchData(data);


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
      await getData(encodedParams);
 // }
  
}

async function fetchData(x){
 // console.log(JSON.stringify(x))
   const{data} = x;
   console.log(Object.keys(data));
}
const ctx = document.getElementById('myChart').getContext('2d');
const xLabels = [];
const yLables = [];
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
       // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
       labels: xLabels,
        datasets: [{
            label: '# of Votes',
            //data: [12,8,2,4,5,8],
            data: main(),
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

//fs.writeFile("./src/api/db3.json", main(),function(){
 // console.log("UK data generated");
//});


main();