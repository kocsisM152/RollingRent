const Car = require('../models/Car');
const { markak, kedvezmenyek } = require('../public/js/adatok');

exports.getNewCar = async (req, res) => {
    try {
        res.statusCode = 200;
        return res.render('new-car.ejs', { markak, kedvezmenyek });
    } catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
};

exports.postNewCar = async (req, res) => {
    try {
        const {
            marka,
            tipus,
            evjarat,
            szarmazasiorszag,
            leiras,
            ar,
            kedvezmeny,
            kepek,
        } = req.body;
        const newCar = new Car({
            marka,
            tipus,
            evjarat,
            szarmazasiorszag,
            leiras,
            ar,
            kedvezmeny,
            kepek,
        });
        // console.log(newCar);

        await newCar.save();
        res.statusCode = 201;
        return res.json({ msg: 'Létre jött az új kocsi!' });
    } catch (error) {
        res.statusCode = 404;
        return res.json({ msg: 'Nem jött létre az új felhasználó!' + error });
    }
};
