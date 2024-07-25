const express = require('express');
const router = express.Router();

const { AddHostel, FindHostel, FindAllHostel } = require('../controller/userController.js');

router.route("/add-hostel").post(AddHostel);

router.route('/hostel/:id').get(FindHostel);
router.route('/hostels').get(FindAllHostel);

router.route("/").get((req, res) => {
    res.send('Hostel routes');
});

module.exports = router;