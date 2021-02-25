import covid from './index.js';
import sessionTemplate from './sessionTemplate';

function render(){

let units = document.getElementById('units');

units.innerHTML = sessionTemplate();
};

export default render;

