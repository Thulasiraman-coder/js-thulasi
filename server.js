const express = require('express');
const mongoose =require('mongoose');
const authRoutes = require('./routes/auth');
const cors = require('cors');
app.use(cors());
const app = express();
app.use(express.json());
app.use('/api/auth',authRoutes);
mongoose.connect("mongodb://localhost:27017/User")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
const PORT = 5500;
app.listen()
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });