var express = require('express');
var mongoose = require('mongoose');
require('dotenv').config({
    silent: true
});
var userSearch = require('./model/searches');
var Search = require('bing.search');


var port = process.env.PORT || 8080;

var app = express();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/app');

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/search/:search', function(req, res){
   var input = req.params.search;
   
   var newSearch = userSearch({
       term: input
   });
   
   newSearch.save(function(err){
       if(err) throw err;
       console.log('search saved successfully');
   });
   
   var paginate = req.query.offset || 10;
   
   var search = new Search(process.env.KEY);

    search.web(newSearch.term,
        {top: paginate }, 
        function(err, results){
            if(err){
                throw err;
            }
           res.json(results.map(function(search){
               return {
                   url: search.url,
                   title: search.title,
                   alt: search.description,
                   //displayUrl: search.displayUrl,
                   url: search.url
               };
           }));
        });
});

app.get('/recentSearches', function(req, res){
    userSearch.find({},  function(err, searches){
        if(err) throw err;
        
        res.json(searches.map(function(search){
            return {
                term: search.term,
                when: search.when
            }
        }))
    });
});

app.listen(port, function(){
    console.log("Listening on port: " + port);
});