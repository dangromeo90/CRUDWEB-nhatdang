const express = require('express');
const router = express.Router();
router.use('/api/v1/product' , require('./product') )
module.exports = router ;