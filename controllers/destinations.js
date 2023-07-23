const Flight = require('../models/flight');

async function create(req, res) {
    try {
        const flight = await Flight.findById(req.params.id); 
        if (flight) {
          flight.destinations.push({
            airport: req.body.airport,
            arrival: new Date(req.body.arrival),
          });
          await flight.save(); 
        
          res.redirect(`/flights/${flight._id}`);
        } else {
          throw new Error('Flight not found');
        }
      } catch (err) {
        console.error(err);
        res.render('error'); 
      }
    }

module.exports = {
  create,
};