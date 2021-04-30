const express = require ('express');
const path = require('path');
const open = require('open');
const webpack = require('webpack');
const config = require('../../../webpack.config');

const app = express();

app.route = express.Router();
const port = 9000
const compiler = webpack(config);

app.use(express.json());

app.use(require('webpack-dev-middleware')(compiler,{
    publicPath: config.output.publicPath
}));

app.use(express.static('src'))

//add a route that express should handle
app.get('/', (req,res) => {
    res.send((path.join(__dirname, './dist')));
}); 
app.get('/', (req,res) => {
    res.json([
        {"id":1,"firstName":"Samuel","LastName":"Mwangi"},
        {"id":2,"firstName":"Emmanuel","LastName":"Mbuthia"},
        {"id":3,"firstName":"Sharleen","LastName":"Gathoni"}
    ]);
}); 


app.listen(port, ()=>{
    console.log(`running on port ${port}`);
    open('http://localhost:'+ port)
})