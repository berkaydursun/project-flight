var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var flightSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },


}, { timestamps: true }
);

const Flight = mongoose.model("flight", flightSchema);
module.exports = Flight;