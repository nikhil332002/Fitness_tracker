import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Activity = () => {
    const [activities, setActivities] = useState([]);
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [calories, setCalories] = useState('');

    useEffect(() => {
        fetchActivities();
    }, []);

    const fetchActivities = async () => {
        const res = await axios.get('/api/activities');
        setActivities(res.data);
    };

    const addActivity = async () => {
        const res = await axios.post('http://localhost:5000/api/activities', { name, duration, calories });
        setActivities([activities, res.data]);
    };

    return (
        <div>
            <h1>Fitness Tracker</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="Activity Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Duration (min)" 
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Calories Burned" 
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                />
                <button onClick={addActivity}>Add Activity</button>
            </div>
            <ul>
                {activities.map(activity => (
                    <li key={activity._id}>
                        {activity.name} - {activity.duration} min - {activity.calories} kcal
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Activity;
