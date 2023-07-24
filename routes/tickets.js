const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/tickets');

router.post('/flights/:id/tickets', ticketsController.create);
router.get('/flights/:id/tickets/new', ticketsController.new);

module.exports = router;