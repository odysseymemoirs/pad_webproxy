

const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    serialno: Number,
    vehicleType: String,
    model: String,
    mileage: Number
});

const car = mongoose.model('motercycleList',vehicleSchema);

module.exports = car;