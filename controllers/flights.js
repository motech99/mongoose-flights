const Flight = require('../models/flight');

async function index(req, res) {
    try {
      const flights = await Flight.find({});
      res.render('flights/index', { flights });
    } catch (err) {
      console.error(err);
      res.render('error');
    }
  }

function newFlight(req, res) {
    res.render('flights/new');
}

async function create(req, res) {
  try {
    const flightData = {
      airline: req.body.airline,
      airport: req.body.airport,
      flightNo: req.body.flightNo,
      departs: new Date(req.body.departs),
      destinations: [], 
    };

    await Flight.create(flightData);
    res.redirect('/flights');
  } catch (err) {
    console.error(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}

async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', { flight }); 
  } catch (err) {
    console.error(err);
    res.render('error');
  }
}

module.exports = {
    index,
    new: newFlight,
    create,
    show,
};