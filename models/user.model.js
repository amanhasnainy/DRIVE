const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true,
        lowercase:true,
        unique:true,
        minlength:[3,'Username must be at least 3 character long']
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase:true,
        unique:true,
        minlength:[13,'Email must be at least 11 character long']
    },
    password:{
        type: String,
        required: true,
        trim: true,
        unique:true,
        minlength:[5,'password must be at least 5 character long']
    },

})

const user = mongoose.model('user',userSchema);

module.exports = user;