const userModel = require("../Models/usersModel");

// Register new user

const userRegister = async(req,res) => {
    const {username,password,firstname,lastname} = req.body;

    const newUser = new userModel({
        username,
        password,
        firstname,
        lastname
    })

    try{
        await newUser.save();
        res.status(200).json(newUser)
    }catch(error){
        res.status(500).json({messages: error.message})

    }

}

module.exports = userRegister;