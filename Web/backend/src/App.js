const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');


app.use(cors());

app.use(
   express.urlencoded({ 
       extended: true,
   })
);   

app.use(express.json());



app.get('/parking', (req, res) => {
    controller.parking(req, res, next => {
        res.send();
    });
});
app.post('/login', (req, res) => {
    controller.login(req, res, next => {
        res.send();
    });
});
app.post('/register', (req, res) => {
    console.log('Received Registration Data:', req.body);
    controller.register(req, res, next => {
        res.send();
    });
});



app.post('/placeOrder', (req, res) => {
    controller.placeOrder(req.body, (callback) => {
        res.send(callback);
    });
});

app.post('/booking_update', (req, res) => {
    controller.updateParking(req.body, (callback) => {
        res.send(callback);
    });
});

app.post('/deleteParking', (req, res) => {
    controller.deleteUser(req.body, (callback) => {
        res.send(callback);
    });
});

module.exports = app;