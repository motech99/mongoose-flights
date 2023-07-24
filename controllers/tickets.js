const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

async function create(req, res) {
  try {
    const flightId = req.params.id;
    const flight = await Flight.findById(flightId);

    if (!flight) {
      throw new Error('Flight not found');
    }

    const { seat, price } = req.body;
    const ticketData = {
      seat,
      price,
      flight: flight._id,
    };

    const ticket = new Ticket(ticketData);
    await ticket.save();

    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.error(err);
    res.render('error');
  }
}

async function newTicket(req, res) {
    try {
      const flight = await Flight.findById(req.params.id);
      res.render('tickets/new', { flight });
    } catch (err) {
      console.error(err);
      res.render('error');
    }
  }
  
  module.exports = {
    create,
    new: newTicket, 
  };