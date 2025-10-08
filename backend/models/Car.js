const mongoose =require('mongoose');

const carSchem = new mongoose.Schema(
    {
        marka: {
            type: String,
            require: true,
        },
        tipus: {
            type: String,
            require: true,
        },
        kepek: [
            {
                type: String,
                require: true,
            }   
        ]
    },
    {timestamps: true}
);

const CarModel = mongoose.model('Car', carSchem);

module.exports = CarModel;