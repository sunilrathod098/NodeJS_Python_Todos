import express from 'express';
import axios from 'axios';
import User from '../model/user.model.js'

const router = express.Router();

//registerUser
router.post('/register', async (req, res) => {
    const {username, email, password} = req.body;
    try {
        const response = await axios.post('http://127.0.0.1:5000/hash', {password});
        const hashedPassword = response.data;
        const user = new User({
            username,
            email,
            password: hashedPassword
        })
        if (!user) {
            return res.status(400).json({ message: 'Invalid user data' });
        }
        await user.save();
        res.status(201).send('User registered successfully')
    } catch (error) {
        res.status(500).send(message.error || 'User not found')
    }
})


//loginUser
router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({ message: 'Invalid user data' });
        }

        const response = await axios.post('http://127.0.0.1:5000/verify',{
            password: user.password,
            hashedPassword: user.password
        });
        if (response.data.valid) {
            res.status(200).send('Login User successful')
        } else {
            res.status(401).send('Invalid Credentials')
        }
    } catch (error) {
        res.status(500).send(message.error || 'User not found')
    }
})


export default router;