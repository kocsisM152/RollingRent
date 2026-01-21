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

exports.updateOneCarFrontend = async (req, res) => {
    try {
        const {id} = req.params;
        const { foglalhatoe } = req.body;
        console.log(foglalhatoe);
        
        const cars = await Car.findByIdAndUpdate({_id: id}, {$set: { foglalhatoe: foglalhatoe}});
        res.statusCode = 201;
        return res.json({ msg: 'Sikeres foglalás!' });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: error });
    }
};
