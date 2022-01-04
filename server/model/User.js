var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    tc: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    flights:{
        type:Array,
    }
}, { timestamps: true }
);

const User = mongoose.model("user", userSchema);
module.exports = User;