import inputData from './data';

const covid19ImpactEstimator = (data) => {
  const { reportedCases } = data;
  const impact = {
    currentlyInfected: reportedCases * 10,
    infectionsByRequestedTime: (requestedTimeInDays) => {
      return (
        impact.currentlyInfected * 2 ** Math.floor(requestedTimeInDays / 3)
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
  };

  return {
    data,
    impact,
    severeImpact,
  };
};
export default covid19ImpactEstimator(inputData);
