const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flights');
const destinationsRouter = require('./destinations');

// GET /flights
router.get('/', flightsController.index);
// GET /flights/new
router.get('/new', flightsController.new);
// POST /flights
router.post('/', flightsController.create);
// GET /flights/:id (show functionality) MUST be below new route
router.get('/:id', flightsController.show);

// Mount the destinations router to handle destination routes for flights
router.use('/:id', destinationsRouter);

module.exports = router;
