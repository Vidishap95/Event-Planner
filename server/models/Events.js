const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true,
        trim: true
    },
    eventDescription: {
        type: String,
        required: true,
        trim: true
    },
    eventDate: {
        type: String,   // Changed the data type to Date
        required: true,
    },
    eventTime: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
});
const Events = mongoose.model("Events", eventSchema, "Events");

module.exports = Events;