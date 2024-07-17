const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');


app.use(cors());

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fitness-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
  });

// Routes
const activities = require('./routes/Activities');
app.use('/api/activities', activities);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
