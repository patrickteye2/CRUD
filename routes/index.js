var express = require('express');
var router = express.Router();

var database = require('../database');


router.get('/', (request, response, next) => {

    var query = "SELECT * FROM test_table ORDER BY id DESC";

    database.query(query, (error, data) => {

        if(error){
            throw error;
        }
        else{
            response.render('index', {
                title:'Complete List',
                action:'list',
                workData:data
            });
        }

    })

})

router.get("/add", function(request, response, next) {
    response.render("index", {
        title:'New Data',
        action:'add'
    })
})

router.post("/add", function(request,response, next){
    
    var last_name = request.body.last_name;

    var other_names = request.body.other_names;

    var date = request.body.birthday;

    var query = `
    INSERT INTO test_table
    (Last_Name, Other_Names, Date_Of_Birth)
    VALUES ("${last_name}", "${other_names}", "${date}")
    `;

    database.query(query, function(error, data){

        if(error)
        {
            throw error
        }
        else
        {
            response.redirect("/");
        }

    });

})

module.exports = router;