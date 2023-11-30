// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Event bus
const events = [];

// Event bus endpoint
app.post('/events', (req, res) => {
  const event = req.body;
  events.push(event);

  // Send event to posts service
  axios.post('http://localhost:4000/events', event).catch((err) => {
    console.log(err.message);
  });

  // Send event to comments service
  axios.post('http://localhost:4001/events', event).catch((err) => {
    console.log(err.message);
  });

  // Send event to query service
  axios.post('http://localhost:4002/events', event).catch((err) => {
    console.log(err.message);
  });

  // Send event to moderation service
  axios.post('http://localhost:4003/events', event).catch((err) => {
    console.log(err.message);
  });

  res.send({ status: 'OK' });
});

// Get all events
app.get('/events', (req, res) => {
  res.send(events);
});

// Listen to port
app.listen(4005, () => {
  console.log('Listening on 4005');
});
