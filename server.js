const express = require('express');


const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));

app.get('/', (req, res) => res.json({ msg: 'Welcome to Contact Keeper API'}));

// Routes
app.use('/api/users', require ('./routes/users'));
app.use('/api/contacts', require ('./routes/contacts'));
app.use('/api/auth', require ('./routes/auth'));