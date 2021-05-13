
import {dataPromise} from './index'

/*
dataPromise.then((evt)=>{
  renderAll('impact','normalCurrentlyInfected',evt); 
  renderAll('severeImpact','severeCurrentlyInfected',evt); 
}) */

//id1 is the returned object on severity
// id2 is the HTML element to be updated with the value

  function renderAll(id1,id2,evt){
    let someProd = id1
  if (someProd in evt) {
    let calculatedCurrentInfection = document.getElementById(id2);
    let output = '';
    output += `${evt[someProd].currentlyInfected}`;
    calculatedCurrentInfection.innerHTML = output;
  }

  }