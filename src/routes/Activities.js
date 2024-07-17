const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity');

// Create Activity
router.post('/', async (req, res) => {
    const newActivity = new Activity(req.body);
    await newActivity.save();
    res.send(newActivity);
});

// Get All Activities
router.get('/', async (req, res) => {
    const activities = await Activity.find();
    res.send(activities);
});

// Update Activity
router.put('/:id', async (req, res) => {
    const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(activity);
});

// Delete Activity
router.delete('/:id', async (req, res) => {
    await Activity.findByIdAndDelete(req.params.id);
    res.send({ message: 'Activity deleted' });
});

module.exports = router;
