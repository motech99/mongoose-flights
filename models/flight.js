const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationsSchema = new mongoose.Schema({
    airport: { type: String },
    arrival: { type: Date }, 
});



const flightSchema = new mongoose.Schema({
    airline: { 
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function() {
            const oneYearFromNow = new Date();
            oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
            return oneYearFromNow;
        },
    },
    destinations: [destinationsSchema]
});

const Flight = mongoose.model('FLight', flightSchema);

module.exports = mongoose.model('Flight', flightSchema);