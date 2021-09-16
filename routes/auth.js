const express = require('express');
const router = express.Router();

// route GET api/auth
// Get Logged in User
// Private Access
router.get('/', (req, res) => {
    res.send('Get Logged In User');
});

// route POST api/auth
// Auth User and Get Token
// Public Access

router.post('/', (req,res)=>{
    res.send('Log In User');
});



module.exports = router;