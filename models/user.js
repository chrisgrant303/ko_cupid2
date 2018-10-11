const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    level: { type: Number, required: true },
    bio: { type: String },
    age: { type: Number, required: true },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    matchesWon: { type: Number, default: 0 },
    matchesLost: { type: Number, default: 0 },
    profilePic: { type: String, default: "" },
    type: {
        type: String,
        enum: ["fighter", "referee"],
        default: "fighter"
    },
    lat: { type: Number },
    lng: { type: Number },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'User phone number required']
    },
    date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;