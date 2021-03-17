
import {getUsers} from '../api/userApi'; 
import {covid19ImpactEstimator} from './index'

export function sessions(){
getUsers().then(data =>{
    let output = " ";
    for(var i in data) {
        output +=
      `<div class="tile cf">
            <h3>Currently Infected</h3>
            <div class="data">
                <div class="column1">
                    <div class="normal title">Normal</div>
                    <div class="units" id="units">${data[i].avgAge}</div>
                </div>
                <div class="column1">
                    <div class="severe title">Severe</div>
                    <div class="units">500m</div>
            </div>
            <p>50X more people infected than known cases</p>
        </div>`
    };

    document.getElementById('main--body').innerHTML=output;
});
}
