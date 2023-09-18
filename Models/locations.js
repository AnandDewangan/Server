const mongoose = require('mongoose');

const restuarantsSchema = new mongoose.Schema({

    name : {
        type : String
    },
    city_id : {
        type : Number
    },
    location_id : {
        type : Number
    },
    city_name : {
        type : String
    },
    country_name : {
        type : String
       
    }
});
module.exports = mongoose.model('location', restuarantsSchema);