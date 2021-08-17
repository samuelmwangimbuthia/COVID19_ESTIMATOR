import '../api/statistics-db.json';
import Chart from 'chart.js/auto';

import { getUsers } from '../api/userApi';

document.getElementById('toggle').addEventListener('change', async (event) => {
  try {
    var optionValue = await event.currentTarget.value;
    console.log(optionValue)
    displayRawDataSessions(optionValue);
  } catch (err) {
    console.error(err);
  }
});
//displayRawDataSessions(optionValue);
export default function displayRawDataSessions(optionValue) {
  getUsers().then(results => {
    for (var i in results) {
      if (results[i].id === +optionValue) {
        let data = results[i];
        const
          { reportedCases,
            totalHospitalBeds,
            avgDailyIncomeUSD }
            = data;

        const impact = {
          currentlyInfected: reportedCases * 10,
          infectionsByRequestedTime: (requestedTimeInDays) => {
            return (
              impact.currentlyInfected * 2 ** Math.floor(requestedTimeInDays / 3)
            );
          },
          severeCasesByRequestedTime: (requestedTimeInDays) => {
            return 0.15 * impact.infectionsByRequestedTime(requestedTimeInDays);
          },

          hospitalBedsByRequestedTime: (requestedTimeInDays) => {
            return (
              impact.severeCasesByRequestedTime(requestedTimeInDays) -
              Math.floor(0.35 * ((100 / 95) * totalHospitalBeds))
            );

          },
          casesForICUByRequestedTime: (requestedTimeInDays) => {
            return (5 / 100) * impact.infectionsByRequestedTime(requestedTimeInDays);
          },
          dollarsInFlight: (requestedTimeInDays) => {
            return Math.floor(
              (avgDailyIncomeUSD *
                impact.infectionsByRequestedTime(requestedTimeInDays)) /
              30
            );
          },
        };
        const severeImpact = {
          currentlyInfected: reportedCases * 50,
          infectionsByRequestedTime: (requestedTimeInDays) => {
            return (
              severeImpact.currentlyInfected *
              2 ** Math.floor(requestedTimeInDays / 3)
            );
          },
          severeCasesByRequestedTime: (requestedTimeInDays) => {
            return 0.15 * severeImpact.infectionsByRequestedTime(requestedTimeInDays);
          },
          hospitalBedsByRequestedTime: (requestedTimeInDays) => {
            return (
              severeImpact.severeCasesByRequestedTime(requestedTimeInDays) -
              Math.floor(0.35 * ((100 / 95) * totalHospitalBeds))
            );
          },
          casesForICUByRequestedTime: (requestedTimeInDays) => {
            return (
              (5 / 100) * severeImpact.infectionsByRequestedTime(requestedTimeInDays)
            );
          },
          dollarsInFlight: (requestedTimeInDays) => {
            return Math.floor(
              (avgDailyIncomeUSD *
                severeImpact.infectionsByRequestedTime(requestedTimeInDays)) /
              30
            );
          },
        };
        console.log(impact.severeCasesByRequestedTime(30))
        dataPromise({
          data,
          impact,
          severeImpact,
        });
      }
    }
  })

}

function dataPromise(evt) {
  renderAll('impact', 'normalCurrentlyInfected', 'currentlyInfected', evt);
  renderAll('severeImpact', 'severeCurrentlyInfected', 'currentlyInfected', evt);
  calc('impact', 'availableBeds', 'hospitalBedsByRequestedTime', evt);
  calc('severeImpact', 'shortageBeds', 'hospitalBedsByRequestedTime', evt);
  calc('impact', 'normalDollarsInFlight', 'dollarsInFlight', evt);
  calc('severeImpact', 'severeDollarsInFlight', 'dollarsInFlight', evt);
  calc('impact', 'normalICUCare', 'casesForICUByRequestedTime', evt);
  calc('severeImpact', 'severeICUCare', 'casesForICUByRequestedTime', evt);
}

//Rendering the computed estimates based on different periods
function calc(id1, id2, prop, evt) {
  document.getElementById('toggle2').addEventListener('change', async (event) => {
    try {
      let requestedTimeInDays = await event.currentTarget.value;
      console.log(requestedTimeInDays);
      let impactMagnitude = id1;
      let output = '';
      let currentEvt = evt[impactMagnitude]
      if (prop) {
        let calculatedEstimate = document.getElementById(id2);
        output += `${currentEvt[prop](requestedTimeInDays)}`;
        calculatedEstimate.innerHTML = output;
      }
    } catch (err) {
      console.error(err);
    }
  });
}

//id1 is the returned object on severity
// id2 is the HTML element to be updated with the value

function renderAll(id1, id2, prop, evt) {
  let impactMagnitude = id1;
  let output = '';
  let currentEvt = evt[impactMagnitude]
  if (prop) {
    let calculatedCurrentInfection = document.getElementById(id2);
    output += `${currentEvt[prop]}`;
    calculatedCurrentInfection.innerHTML = output;
  }
}
