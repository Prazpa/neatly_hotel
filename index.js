const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('../neatly_hotel/src/app/api/authRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});