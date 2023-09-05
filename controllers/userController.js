
const User = require('../models/user');



exports.register = async (req,res) => {
    try {
        const {email,password,fullName} = req.body;
        if (!username.trim())  res.json({error:"username required"});
        const userData = req.body;
        const newUser = new User(userData);
        await newUser.save();
    
        res.status(201).json({ message: 'User registered successfully', user: newUser });
      } catch (error) {
        res.status(400).json({ message: 'Error registering user', error: error.message });
      }
}