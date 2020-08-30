var express = require('express');
var plants = require('../helpers/plantsInfo.json')
var db = require('../connectors/sqlConnecter')

var router = express.Router();

/* GET home page. */
router.get('/getAllPlants', (req, res, next) => {
    var resDB = db.execute('SELECT * FROM plants')
    var response = {}
    resDB.then(result => {
        response = result[0]
        res.status(200).send(response)
    }).catch(err => {
        console.log(err)
        res.status(500).send("No Data in DB")
    }) 
    
});

router.get('/getPlantByName', (req, res, next) => {
    var plantName = req.query.name
    var resDB = db.execute('SELECT * FROM plants where Name like \''+plantName+'\'')
    var response = {}
    try{
        resDB.then(result => {
            response = result[0]
            res.status(200).send(response)
        }).catch(err => {
            console.log(err)
            res.status(500).send("No Data in DB")
        }) 
    }catch(e){
        console.log(e)
    }
});

router.get('/getPlantsByType', (req, res, next) => {
    var type = req.query.type
    console.log(type)
    var resDB = db.execute('SELECT * FROM plants where Type like \''+type+'\'')
    var response = {}
    try{
        resDB.then(result => {
            response = result[0]
            res.status(200).send(response)
        }).catch(err => {
            console.log(err)
            res.status(500).send("No Data in DB")
        }) 
    }catch(e){
        console.log(e)
    }
});

module.exports = router;
