var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var staffScheama = new Schema({
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
    }
}, { timestamps: true }
);

const Staff = mongoose.model("staff", staffScheama);
module.exports = Staff;