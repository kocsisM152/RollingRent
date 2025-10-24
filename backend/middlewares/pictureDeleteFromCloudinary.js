const cloudinary = require('cloudinary').v2;
const Car = require('../models/Car');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const pictureDeleter = async (req, res, next) => {
    const { id } = req.params;
    const torolKep = await Car.findById({ _id: id });
    // console.log(torolKep);

    const kep1 = torolKep.kepek[0].split('/')[6].split('?')[0];
    const kep2 = torolKep.kepek[1].split('/')[6].split('?')[0];
    const kep3 = torolKep.kepek[2].split('/')[6].split('?')[0];

    await cloudinary.uploader.destroy(kep1.toString());
    await cloudinary.uploader.destroy(kep2.toString());
    await cloudinary.uploader.destroy(kep3.toString());

    next();
};

module.exports = pictureDeleter;
