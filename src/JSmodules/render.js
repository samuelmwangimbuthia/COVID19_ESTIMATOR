

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
async function fetchData(x) {
  const { data } = x;
  const keysArray = Object.keys(data[1]);
  const valuessArray = Object.values(data[3]);

  
  let myDataArray = x.data;
  let myDatesArray = myDataArray.map((element) => {
    return element.date;
  });

  let myDailyCasesArray = myDataArray.map((element) => {
    return element.dailyCases;
  });
 
  return [keysArray, valuessArray, myDatesArray, myDailyCasesArray];
}

export {getData, main, fetchData}