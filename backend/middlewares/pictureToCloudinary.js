const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const pictureUploader = async (req, res, next) => {
    const { kep1, kep2, kep3 } = req.body;
    // console.log({ kep1, kep2, kep3 });
    const results1 = await cloudinary.uploader.upload(kep1);
    const url1 = cloudinary.url(results1.public_id);
    // console.log(url1);
    const results2 = await cloudinary.uploader.upload(kep2);
    const url2 = cloudinary.url(results2.public_id);
    // console.log(url2);
    const results3 = await cloudinary.uploader.upload(kep3);
    const url3 = cloudinary.url(results3.public_id);
    // console.log(url3);

    const kepek = [url1, url2, url3];
    req.body.kepek = kepek;

    next();
};

module.exports = pictureUploader;
