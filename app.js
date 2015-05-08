//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks/:name'
var express = require('express');
var trucks = require('./trucks');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/trucks', function(request, response) {
    var allTrucks = trucks.getTrucks();
    response.send(allTrucks);
});

app.get('/trucks/:name', function(request, response) {
    var name = request.params.name
    console.log(name)
    var truck = trucks.getTruck(name);
    if (truck) {
        response.send(truck);
    } else {
        response.status(404).send('Truck ' + name + ' not found');
    }
});

app.get('/food-types', function(request, response) {
    var allFoodTypes = trucks.getFoodTypes();
    response.send(allFoodTypes);
});

app.get('/food-types/:type', function(request, response) {
    var type = request.params.type;
    var truckWithFoodType = trucks.filterByFoodType(type);
    if (truckWithFoodType) {
        response.send(truckWithFoodType);
    } else {
        response.status(404).send('Truck with food type ' + name + ' not found');
    }
});

app.listen(8000, function() {
    console.log("listing on port 8000");
});

