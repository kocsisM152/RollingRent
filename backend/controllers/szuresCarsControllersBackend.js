const Car = require('../models/Car');
const { markak, kedvezmenyek } = require('../public/js/adatok');

exports.getSzuresAllCars = async (req, res) => {
    try {
        const cars = await Car.find({});
        res.statusCode = 200;
        return res.render('cars.ejs', { cars });
    } catch (error) {
        res.statusCode = 500;
        return res.render('404.ejs');
    }
};

exports.getSzuresCars = async (req, res) => {
    try {
        const { id } = req.params;
        const carsLekert = await Car.find({});
        const adat = JSON.parse(id);
        const zsanerKedvezmeny = adat.szuresek;
        let cars = [];

        carsLekert.forEach((elem) => {
            let vanE = false;
            zsanerKedvezmeny[0].forEach((item) => {
                if (elem.marka === item) {
                    zsanerKedvezmeny[1].forEach((element) => {
                        if (elem.kedvezmeny === element) vanE = true;
                    });
                }
            });

            if (vanE) cars.push(elem);
        });

        res.statusCode = 200;
        return res.render('cars.ejs', {
            cars,
            markak,
            kedvezmenyek,
        });
    } catch (error) {
        res.statusCode = 500;
        return res.render('404.ejs');
    }
};
