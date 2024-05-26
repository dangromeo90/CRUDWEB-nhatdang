const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const path = require('path');
const {listProduct} = require('./data/product');
const connectMongoDB = require('./dbs/mongodb');
// ejs
app.set('view engine' , 'ejs');
app.use(express.static('public'))
app.use(bodyParser.json());
connectMongoDB();
app.use('/', require('./router/index'))
// render
app.get('/' ,( req , res) => {
    const viewIndex = path.join(__dirname ,'views/index.ejs')
    res.render(viewIndex , { products: listProduct });
})
module.exports = app ;