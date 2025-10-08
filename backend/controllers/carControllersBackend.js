const Car = require('../models/Car');

exports.getAllCarsBackend = async (req, res) => {
    try {
        const carsBackend = await Car.find({});
        res.statusCode = 200;
        return res.render('cars.ejs', { carsBackend });
    } catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
}; 

// exports.getOneCarBackend = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const carBackend = await Car.findById({ _id: id });
//         res.statusCode = 200;
//         return res.render('cars.ejs', { carBackend }); 
//     } catch (error) {
//         res.statusCode = 404;
//         return res.render('404.ejs');
//     }
// };

// exports.postCarBackend = async (req, res) => {
//     try {
//         const { nev, statusz } = req.body;
//         const newCarBackend = new Car({ nev, statusz });
//         await newCarBackend.save();
//         res.statusCode = 201;
//         return res.json({ msg: 'Létre jött az új felhasználó!' });
//     } catch (error) {
//         res.statusCode = 404;
//         return res.json({ msg: 'Nem jött létre az új felhasználó!' });
//     }
// };

// exports.updateOneCarBackend = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { nev, statusz } = req.body;
//         await Car .findByIdAndUpdate({ _id: id }, { nev, statusz });
//         res.statusCode = 201;
//         return res.json({ msg: 'Sikeres módosítás!' });
//     } catch (error) {
//         res.statusCode = 404;
//         return res.json({ msg: 'Valami hiba történt!' });
//     }
// };

// exports.deleteOneCarBackend = async (req, res) => {
//     try {
//         const { id } = req.params;
//         await Car.findByIdAndDelete({ _id: id });
//         res.statusCode = 200;
//         return res.json({ msg: 'Sikeres törlés!' });
//     } catch (error) {
//         res.statusCode = 404;
//         return res.json({ msg: 'Valami hiba történt!' });
//     }
// };
