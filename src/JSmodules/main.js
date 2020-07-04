import inputData from './data';

const covid19ImpactEstimator = (data) => {
  const { reportedCases, totalHospitalBeds } = data;
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
  };

  return {
    data,
    impact,
    severeImpact,
  };
};
export default covid19ImpactEstimator(inputData);
