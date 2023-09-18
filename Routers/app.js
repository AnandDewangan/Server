// Import express and router
const express = require('express');
const routes = express.Router();

// Import all required controlling functions
const restuarantsController = require('../Controllers/restaurants');
const locationsController = require('../Controllers/locations');
const mealtypeController = require('../Controllers/mealtypes');
const menuItemsController = require('../Controllers/menuitems');
const userController = require('../Controllers/users');
const paymentController = require('../Controllers/Payment');


// These are API end points for my project
routes.get('/locations',locationsController.getLocations);
routes.post('/locations',locationsController.createLocation);

routes.get('/mealtypes',mealtypeController.getMealtypes);
routes.post('/mealtypes', mealtypeController.createMealTypes)

routes.post('/filter', restuarantsController.filter);
routes.get("/restaurants", restuarantsController.getAllRestuarant);
routes.get('/locations/:id', restuarantsController.getRestaurantByLocation);
routes.get('/restaurants/:id', restuarantsController.getRestaurantById);
routes.get('/getmenu/:id', menuItemsController.getMenuItemsByRestaurant);
routes.post('/signup', userController.signUp);
routes.post('/login', userController.logIn);
routes.post('/payment', paymentController.handlePayment);

// Exporting router.
module.exports = routes; 