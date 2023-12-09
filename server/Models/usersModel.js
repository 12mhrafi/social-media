const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type:String,
            required: true
        },
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required:false
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        liveSin: String,
        workAt: String,
        relationShip: String,
        followers: [],
        following: [],
    },
    {
        timestamps: true
    }

)

const userModel = mongoose.model("Users",userSchema)
module.exports = userModel;