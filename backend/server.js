require('dotenv').config();

const path = require('node:path');
const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3500;

const dbConnection = require('./utils/dbConnection.js');

dbConnection()
    .then(() => {
        console.log('Sikeres adatbazis csatlakozas');
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    })

app.get('/', (req, res) => {
    try {
        res.statusCode = 200;
        return res.render('index');
    } catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
});

app.use('/cars-backend', require('./routes/carRoutesBackend.js'));