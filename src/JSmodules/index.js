import _, { result } from 'lodash';
import '../api/statistics-db.json';

import { getUsers } from '../api/userApi';



export default getUsers()
  .then(results => {
    for (var i in results) {
      if (results[i].id === 75341457) { //to import optionValue from sessionTemplate.js
        let data = results[i];
        console.log(data)
        return data;
      }
    }

  })
  .then((data)=>{
    const
      { reportedCases,
        totalHospitalBeds,
        avgDailyIncomeUSD }
        = data;
    console.log(reportedCases)

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
    console.log(impact.currentlyInfected)
    return {
      data,
      impact,
      severeImpact,
    };

  })
/*
.then(
  function covid19Estimator(evt){
    console.log(evt.data)
    console.log(evt.impact)
    console.log(evt.severeImpact)
  }
)
*/