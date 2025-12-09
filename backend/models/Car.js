const mongoose = require('mongoose');

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
        evjarat: {
            type: Number,
            require: true,
        },
          uzemanyag: {
            type: String,
            require: true,
        },
          valto: {
            type: String,
            require: true,
        },
          teljesitmeny: {
            type: Number,
            require: true,
        },
          urtartalom: {
            type: Number,
            require: true,
        },
          szin: {
            type: String,
            require: true,
        },
        szarmazasiorszag: {
            type: String,
            require: true,
        },
        leiras: {
            type: String,
            require: true,
        },
        ar: {
            type: Number,
            require: true,
        },
        kedvezmeny: {
            type: Number,
            require: true,
        },
        foglalhatoe: {
            type: Boolean,
            require: true,
            default: true
        },

        ar: {
            type: Number,
            require: true,
        },
        kepek: [
            {
                type: String,
                require: true,
            },
        ],
    },
    { timestamps: true }
);

const CarModel = mongoose.model('car', carSchem);

module.exports = CarModel;
