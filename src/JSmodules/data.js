

export default function data (){
    let inputData = {
        region: {
            name: "Africa",
            avgAge: 19.7,
            avgDailyIncomeUSD: 5,
            avgDailyIncomePopulation: 0.71,
        },

        periodType: "days",
        timeToElapse: 58,
        reportedCases: 674,
        population: 66622705,
        totalHospitalBeds: 1380614

    }
    return inputData;
}

console.log(data());
