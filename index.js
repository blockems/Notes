/* WEB SERVER SET UP */
const express = require('express');
const app = express();
// We will use routes to check security and perform logging
//const router = express.router();

//Converts an incoming JSON body to readable objects
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Make it use ejs
app.set('viw engine', 'ejs');

//now give it a statis directory for assetts
app.use(express.static(process.cwd() + '/public'));

/*log eet */
const Logger = require('./services/logger_service');
const logger = new Logger('app');

/* Load in the dataframes */
//const df = require('dataframe-js');

/* get the config 
************NOTE:***************************
*   ./config contains all of the set up info for different environments so it can be used elsewhere
*   Dont be bloody lazy!
*   Get correct environment variable from the command line.
*   (dev, sit, pre-prod or prod!)
*   If that doesnt work, then make a new section in the config file and call it with your own environemnt name
*/
const Config = require('./config');
//Now we get the varible back from the command line, or set it to dev if none provided
const environment = process.env.env || 'dev'
const config = Config.getEnv(environment);

/* utilities */
const utils = require('./utils');

app.get('/', function(req,res){
    console.log('rendering root');
    //res.json({ message: 'Hello world' })
    res.render('layout');
});

/* Do summat*/
const listener = app.listen(config.port,() =>{
    logger.info('--Starting web server--');
    logger.info(`--Running on ${config.workers} cpu's--`); 
    logger.info('port: ' + listener.address().port);

});