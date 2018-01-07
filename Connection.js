const mangoose = require('mangoose');

//connect to mangodb

mangoose.connect("mongodb://localhost/demo")
//demo ~ the database in mongodb 
Element.on('click', function(){
//some methods

});

mangoose.connect.once('open', function(){
//some methods

});