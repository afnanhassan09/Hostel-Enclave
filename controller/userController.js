const asyncHandler = require("express-async-handler");
const Hostel = require("../models/hostelModel.js");

const AddHostel = asyncHandler(async (req, res) => {
    // Find the max hostelID
    const result = await Hostel.aggregate([
        {
            $group: {
                _id: null,
                maxHostelID: { $max: "$hostelID" }
            }
        }
    ]);

    let maxHostelID = 0;
    if (result.length > 0) {
        maxHostelID = result[0].maxHostelID;
    }

    const hostel = await Hostel.create({
        hostelID: maxHostelID + 1,
        hostelName: req.body.hostelName,
        ownerName: req.body.owner,
        sector: req.body.sector,
        hostelAddress: req.body.hostelAddress,
        phone: req.body.phone,
        email: req.body.email,
        startingPrice: req.body.startingPrice,
        Wifi: req.body.Wifi,
        Mess: req.body.Mess,
        Furnished: req.body.Furnished,
        UPS: req.body.UPS,
        Parking: req.body.Parking,
        Kitchen: req.body.Kitchen,
        Geyser: req.body.Geyser,
        AC: req.body.AC,
        AirCooler: req.body.AirCooler,
        Laundry: req.body.Laundry,
        cleaning: req.body.cleaning
    });

    res.status(201).json({
        message: "Hostel added successfully",
        hostel
    });
});

const FindAllHostel = asyncHandler(async (req, res) => {

    // Find the hostel by hostelID, not by _id
    const hostel = await Hostel.find();

    if (!hostel) {
        res.status(404).json({ message: 'Hostel not found' });
        return;
    }

    res.status(200).json(hostel);
});

const FindHostel = asyncHandler(async (req, res) => {
    const { id } = req.params; // 'id' here should be the hostelID

    // Find the hostel by hostelID, not by _id
    const hostel = await Hostel.findOne({ _id: id });

    if (!hostel) {
        res.status(404).json({ message: 'Hostel not found' });
        return;
    }

    res.status(200).json(hostel);
});


module.exports = { AddHostel, FindHostel, FindAllHostel };
