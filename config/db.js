const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURL).then(function(){
    console.log("connection established");
    
} )

module.exports = mongoose.connection;