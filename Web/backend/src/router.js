
const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.post('/login', controller.login);
router.post('/register', controller.register);
router.post('/placeOrder', controller.placeOrder);
router.post('/booking_update', controller.updateParking);
router.post('/booking_delete', controller.deleteParking);



module.exports = router;