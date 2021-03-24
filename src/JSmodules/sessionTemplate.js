
import {getUsers} from '../api/userApi'; 
import {covid19ImpactEstimator} from './index'

export function sessions(){
getUsers().then((data)=>{
    data.forEach((elements) =>{
    let output = " ";
        output +=
      `<div class="tile cf">
            <h3>Currently Infected</h3>
            <div class="data">
                <div class="column1">
                    <div class="normal title">Normal</div>
                    <div class="units" id="units">${elements.avgAge}</div>
                </div>
                <div class="column1">
                    <div class="severe title">Severe</div>
                    <div class="units">500m</div>
            </div>
            <p>50X more people infected than known cases</p>
        </div>`;
        
        global.document.getElementById('main--body').innerHTML=output;
});
    });

    
}
export function displayRawDatasessions(){
    getUsers().then((data)=>{
        data.forEach((elements) =>{
        let rawOutput = " ";
            rawOutput +=
            `<tr>
            <td>${elements.avgAge}</td>
            <td>${elements.avgDailyIncomeUSD}</td>
            <td>${elements.avgDailyIncomePopulation}</td>
            <td>${elements.periodType}</td>
            <td>${elements.timeToElapse}</td>
            <td>${elements.reportedCases}</td>
            <td>${elements.population}</td>
            <td>${elements.totalHospitalBeds}</td>
             </tr>`
            
            global.document.getElementById('raw-data').innerHTML=rawOutput;
    });
        });
    
        
    }



