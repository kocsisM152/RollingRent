const Car = require('../models/Car');

exports.getAllCarsFrontend = async (req, res) => {
    try {
        const cars = await Car.find({});
        res.statusCode = 200;
        return res.json({ cars });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: error });
    }
};
