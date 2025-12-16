const Car = require('../models/Car');
const { markak, kedvezmenyek } = require('../public/js/adatok');

exports.getAllCarsBackend = async (req, res) => {
    try {
        const cars = await Car.find({});
        res.statusCode = 200;
        return res.render('cars.ejs', { cars, markak, kedvezmenyek });
    } catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
};

exports.getOneCarBackend = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findById({ _id: id });
        res.statusCode = 200;
        return res.render('car.ejs', { car, markak, kedvezmenyek });
    } catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
};

exports.postCarBackend = async (req, res) => {
    try {
        const { nev, statusz } = req.body;
        const newCarBackend = new Car({ nev, statusz });
        await newCarBackend.save();
        res.statusCode = 201;
        return res.json({ msg: 'Létre jött az új felhasználó!' });
    } catch (error) {
        res.statusCode = 404;
        return res.json({ msg: 'Nem jött létre az új felhasználó!' });
    }
};

exports.updateOneCarBackend = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            marka,
            tipus,
            evjarat,
            szarmazasiorszag,
            leiras,
            urtartalom,
            teljesitmeny,
            valto,
            szin,
            uzemanyag,
            ar,
            kedvezmeny,
            kep1,
            kep2,
            kep3,
        } = req.body;
        const kepek = [kep1, kep2, kep3];
        await Car.findByIdAndUpdate(
            { _id: id },
            {
                marka,
                tipus,
                evjarat,
                szarmazasiorszag,
                leiras,
                urtartalom,
                teljesitmeny,
                valto,
                szin,
                uzemanyag,
                ar,
                kedvezmeny,
                kepek
            }
        );
        res.statusCode = 201;
        return res.json({ msg: 'Sikeres módosítás!' });
    } catch (error) {
        res.statusCode = 404;
        return res.json({ msg: 'Valami hiba történt!' });
    }
};

exports.deleteOneCarBackend = async (req, res) => {
    try {
        const { id } = req.params;
        await Car.findByIdAndDelete({ _id: id });
        res.statusCode = 200;
        return res.json({ msg: 'Sikeres törlés!' });
    } catch (error) {
        res.statusCode = 404;
        return res.json({ msg: 'Valami hiba történt!' });
    }
};
