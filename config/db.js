const mongoose = require('mongoose')

function connectdb(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('connected to db');
    })
}

module.exports = connectdb;