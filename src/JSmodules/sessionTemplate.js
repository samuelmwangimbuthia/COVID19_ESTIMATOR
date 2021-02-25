import covid from './index.js'
function sessionTemplate(item){
    if(item < 1) return '<p><em>You donot have any list items yet</em></p>';

    return covid.impact.hospitalBedsByRequestedTime(50);
}

export default sessionTemplate;