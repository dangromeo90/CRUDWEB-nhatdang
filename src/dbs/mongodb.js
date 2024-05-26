const mongoose = require('mongoose');
const connectMongoDB = () =>{
    const URI = "mongodb+srv://nhatdang0915111916:TonehVpKWxIwJl9D@cluster0.smqsmw7.mongodb.net/CRUD_WEB";
    mongoose.connect(URI).then( () => {
        console.log("Connect to MongoDB");
    }).catch((error) =>{
        console.log('Error connecting to MongoDB', error);
    })
}
module.exports = connectMongoDB;