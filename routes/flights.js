const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flights');
const destinationsRouter = require('./destinations');

router.get('/', flightsController.index);
router.get('/new', flightsController.new);
router.post('/', flightsController.create);
router.get('/:id', flightsController.show);

router.use('/:id', destinationsRouter);

module.exports = router;
