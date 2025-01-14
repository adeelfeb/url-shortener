const mongoose = require("mongoose");
const User = require("../models/user.model");
const Url = require("../models/url.model");
const {v4: uuidv4} = require("uuid")

const {setUser, getUser} = require("../service/auth")

const handleUserSignUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if all fields are provided
        if (!name || !email || !password) {
            return res.status(400).send("Please provide all required fields.");
        }

        // Check if the email is already in use
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("Email is already registered.");
        }

        // Create a new user with the validated data
        const newUser = new User({
            name,
            email,
            password
        });

        // Save the user to the database
        await newUser.save();
        const allUrls = await Url.find({})

        // Redirect or render a success page (e.g., home)
        return res.redirect("/");
    } catch (error) {
        console.error("Error during sign up:", error);
        res.status(500).send("Internal server error");
    }
};


const handleUserLogin = async(req, res)=>{
    try {
        const { name,password } = req.body;

        // Check if all fields are provided
        if (!name || !password) {
            return res.status(400).send("Please provide all required fields.");
        }

        
        const tempUser = await User.findOne({name, password})
        if(!tempUser){
            return res.render("login", {error: "Invalid User or Password"})
        }

        const allUrls = await Url.find({})
        const sessionId = uuidv4()
        setUser(sessionId, tempUser)
        // Redirect or render a success page (e.g., home)
        res.cookie("uid", sessionId)
        return res.redirect("/");
    } catch (error) {
        console.error("Error during Login:", error);
        res.status(500).send("Internal server error");
    }
}


module.exports = {
    handleUserSignUp,
    handleUserLogin
};
