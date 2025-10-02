const mongoose =require('mongoose');

const userSchem = new mongoose.Schema(
    {
        nev: {
            type: String,
            require: true,
        },
        statusz: {
            type: String,
            require: true,
        },
    },
    {timestamps: true}
);

const UserModel = mongoose.model('User', userSchem);

module.exports = UserModel;