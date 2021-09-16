const express = require('express');
const router = express.Router();

// route Get api/contacts
// Get users contacts
// Private Access
router.get('/', (req, res) => {
    res.send('Get all user contacts');
});

// route Post api/contacts
// Add New Contact
// Private Access
router.post('/', (req, res) => {
    res.send('Contact created')
});

// route PUT api/contacts
// Update Contact
// Private Access

router.put('/:id', (req, res) => {
    res.send('Contact Updated');
});

// route  DELETE  api/contacts
// Delete Contact
// Private Access
router.delete('/:id', (req, res) => {
    res.send('Contact Deleted');
});


module.exports = router;