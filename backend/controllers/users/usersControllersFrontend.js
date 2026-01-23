const User = require('../../models/User.js');

exports.getOneUserFrontend = async (req, res) => {
    try {
        const { id } = req.params;
        
        const user = await User.findById({ _id: id }).populate('kedveltAutok');
        
        res.statusCode = 200;
        return res.json({ user });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: error });
    }
};

exports.updateOneUserKedvelemFrontend = async (req, res) => {
    try {
        const { id } = req.params;
        const { cars } = req.body;
        
        const user = await User.findById({ _id: id });
        
        await User.findByIdAndUpdate({ _id: id }, { $set: { kedveltAutok: cars } });
        
        res.statusCode = 200;
        return res.json({ msg: 'Sikeres kedvelés módosítás!' });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: error });
    }
};
