import {schema} from '../buildScripts/mockDataSchema';
import jsf from 'json-schema-faker';
import fs from 'fs';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json,function(){
    console.log("mock data generated");
});