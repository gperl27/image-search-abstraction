var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var searchSchema = new Schema({
   term: { type: String },
   when: { type: Date, default: Date.now }
});


var userSearch = mongoose.model('Search', searchSchema);


    
module.exports = userSearch;