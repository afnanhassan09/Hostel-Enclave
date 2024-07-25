const mongoose = require('mongoose');
const HostelSchema = mongoose.Schema({
    hostelID: {
        type: Number,
        required: true,
    },
    hostelName: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    sector: {
        type: String,
        required: true
    },
    hostelAddress: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    startingPrice: {
        type: Number,
        required: true
    },
    Wifi: {
        type: Boolean,
        required: true
    },
    Mess: {
        type: String,
        required: true
    },
    Furnished: {
        type: Boolean,
        required: true
    },
    UPS: {
        type: Boolean,
        required: true
    },
    Parking: {
        type: String,
        required: true
    },
    Kitchen: {
        type: Boolean,
        required: true
    },
    Geyser: {
        type: Boolean,
        required: true
    },
    AC: {
        type: Boolean,
        required: true
    },
    AirCooler: {
        type: Boolean,
        required: true
    },
    Laundry: {
        type: Boolean,
        required: true
    },
    cleaning: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Hostel', HostelSchema);