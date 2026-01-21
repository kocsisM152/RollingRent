require('dotenv').config();

const path = require('node:path');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3500;

const dbConnection = require('./utils/dbConnection.js');

dbConnection().then(() => {
    console.log('Sikeres adatbazis csatlakozas');
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}/api`);
    });
});

app.get('/api', (req, res) => {
    try {
        res.statusCode = 200;
        return res.render('index');
    } catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
});

app.use('/api/cars-backend', require('./routes/carRoutesBackend.js'));
app.use('/api/cars', require('./routes/carRoutesFrontend.js'));
app.use('/api/new-car', require('./routes/newcarRoutes.js'));
app.use('/api/szures-car', require('./routes/szuresCarsBackend'));
app.use('/api/cars-frontend', require('./routes/carRoutesFrontend.js'));

app.use('/api/users-backend', require('./routes/users/usersRoutesBackend.js'));
app.use(
    '/api/register-frontend',
    require('./routes/users/userRegisterRoutes.js')
);
app.use('/api/login-frontend', require('./routes/users/userLoginRoutes.js'));
app.use('/api/stripe', require('./routes/stripeRoutes.js'));
