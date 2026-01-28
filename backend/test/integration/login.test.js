const { describe, it, before, after } = require('node:test');
const mongoose = require('mongoose');
const assert = require('node:assert');
const http = require('node:http');
const app = require('../../server.js');

let server;
let port;

describe('POST /api/login-frontend tesztelése', () => { 
    
   before(async () => {
        await mongoose.connect(process.env.DBSTRING);
        
        server = http.createServer(app);
        await new Promise(resolve => server.listen(0, resolve));
        port = server.address().port;
    }); 
    
    after(async () => {
        await mongoose.connection.close();
        await new Promise(resolve => server.close(resolve));
    });
    
    it('Felhasználó belépése!', async () => {
        const response = await fetch(`http://localhost:${port}/api/login-frontend`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'marko@gmail.com',
                jelszo: 'marko'
            })
        });
        const valasz = await response.json();

        console.log(valasz);
        assert.equal(response.status, 201, 'Sikeres belépés!');    
    });
});