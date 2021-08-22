import Chart from 'chart.js/auto';
import {main, getData, fetchData} from './render';
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
        return valuesArray
      }
  
)
.then(
  function(dataSets){
    createChart([dataSets])
  }
)
.catch(function(reason){
  console.log(reason)
})

function createChart([dataSets]) {
  const ctx = document.getElementById('myChart').getContext('2d');
  const piectx = document.getElementById('pieChart').getContext('2d');
  const proLinectx = document.getElementById('progressiveLineChart').getContext('2d');
  const xLabels = dataSets[2];
  const yLables = dataSets[3];
  // Bar chart
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: xLabels,
      datasets: [{
        data: yLables,
        backgroundColor:[
          'rgba(238,184,104,1)',
          'rgba(75,166,223,1)',
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
  // Pie Chart
  const xPieLabels = dataSets[0];
  const yPieLables = dataSets[1];
  const myPieChart = new Chart(piectx, {
    type: 'pie',
    data: {
      labels: xPieLabels,
      datasets: [{
        data: yPieLables,
        backgroundColor:[
          'rgba(238,184,104,1)',
          'rgba(75,166,223,1)',

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

//progressive line chart
const data = yLables;
//const data2 = yLables.map(function(elem){
 //   return elem*2;
//});

//const data = [];
const data2 = [];
let prev = 100;
let prev2 = 80;
for (let i = 0; i < 1000; i++) {
  prev += 5 - Math.random() * 10;
  data.push({x: i, y: prev});
  prev2 += 5 - Math.random() * 10;
  data2.push({x: i, y: prev2});
}


const totalDuration = 10000;
const delayBetweenPoints = totalDuration / data.length;
const previousY = (ctx) => 
ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) :
 ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

const progressiveLineChart = new Chart(proLinectx, {
    type: 'line',
    data: {
      datasets: [{
        borderColor: 'red',
        borderWidth: 1,
        radius: 0,
        data: data,
      },
      {
        borderColor: 'blue',
        borderWidth: 1,
        radius: 0,
        data: data2,
      }]
    }, 
    options: {
        animation:{
            x: {
                type: 'number',
                easing: 'linear',
                duration: delayBetweenPoints,
                from: NaN, // the point is initially skipped
                delay(ctx) {
                  if (ctx.type !== 'data' || ctx.xStarted) {
                    return 0;
                  }
                  ctx.xStarted = true;
                  return ctx.index * delayBetweenPoints;
                }
              },
              y: {
                type: 'number',
                easing: 'linear',
                duration: delayBetweenPoints,
                from: previousY,
                delay(ctx) {
                  if (ctx.type !== 'data' || ctx.yStarted) {
                    return 0;
                  }
                  ctx.yStarted = true;
                  return ctx.index * delayBetweenPoints;
                }
              }
        },
        interaction: {
          intersect: false
        },
        plugins: {
          legend: false
        },
        scales: {
          x: {
            type: 'linear'
          }
        }
      }
    }
    
)
}