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
        evjarat: 
            {
                type: Number,
                require: true,
            }   
        ,
        szarmazasiorszag: 
            {
                type: String,
                require: true,
            }   
        ,
        ar: 
            {
                type: Number,
                require: true,
            }   
        ,
        kepek: [
            {
                type: String,
                require: true,
            }   
        ],
    },
    {timestamps: true}
);

const CarModel = mongoose.model('car', carSchem);

module.exports = CarModel;