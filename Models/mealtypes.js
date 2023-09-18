const mongoose = require('mongoose');

const mealtypeSchema = new mongoose.Schema({
    name : {
        type : String
    },
    content : {
        type : String
    },
    image : {
        type : String
    },
    mealtype_id : {
        type : Number
    }

});

module.exports = mongoose.model('mealtype', mealtypeSchema);