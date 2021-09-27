const express = require('express');
const connectDB = require('./config/db');


const app = express();

connectDB();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));

app.get('/', (req, res) => res.json({ msg: 'Welcome to Contact Keeper API' }));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));