import {schema2} from '../buildScripts/mockDataSchema2';
import jsf from 'json-schema-faker';
import fs from 'fs';

const json = JSON.stringify(jsf(schema2));

fs.writeFile("./src/api/statistics-db.json", json,function(){
    console.log("mock data generated")
});
