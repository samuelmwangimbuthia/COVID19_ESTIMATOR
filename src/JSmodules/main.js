import inputData from './data';

const covid19ImpactEstimator = (data) => {
  const { reportedCases } = inputData;
  const impact = {
    currentlyInfected: reportedCases * 10,
    infectionsByRequestedTime: () => impact.currentlyInfected * 512,
  };
  const severeImpact = {
    currentlyInfected: reportedCases * 50,
    infectionsByRequestedTime: () => impact.currentlyInfected * 512,
  };
  return {
    data,
    impact,
    severeImpact,
  };
};
export default covid19ImpactEstimator;
