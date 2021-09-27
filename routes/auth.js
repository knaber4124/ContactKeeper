const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');


// route GET api/auth
// Get Logged in User
// Private Access
router.get('/', (req, res) => {
    res.send('Get Logged In User');
});

// route POST api/auth
// Auth User and Get Token
// Public Access

router.post('/', [
    check('email', 'please include a valid email').isEmail(),
    check('password', 'password is required').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                msg: 'Invalid Credentials'
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                msg: 'Invalid Credentials'
            })
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 3600000,
        },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            });
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



module.exports = router;