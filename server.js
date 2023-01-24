const express = require('express');
const ejs = require('ejs');

//create server
const resolutionManager = express();
resolutionManager.set('view engine', "ejs");
resolutionManager.use('/public', express.static('public'));

//route to resolutionManager
resolutionManager.get('/', (req,res) =>{
    res.render('resolutionManager')
})

//run server

const port = 8080;
resolutionManager.listen(port, (req,res) =>{
    console.log("Server running on port",port);
})