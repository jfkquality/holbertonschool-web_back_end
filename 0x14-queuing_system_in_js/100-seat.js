import redis from 'redis';
const client = redis.createClient();
const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);

function reserveSeat(number) {
  client.set('available_seats', number);
}

async function getCurrentAvailableSeats() {
  const seats =  (getAsync('available_seats'));
  return seats;
}

let reservationEnabled = true;

// Redis client created above

// Create Kue server:
const kue = require('kue')
, queue = kue.createQueue();

//Create Express server:
const express = require('express');
const app = express();
const port = 1245;

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})

app.get('/available_seats', async (req, res) => {
  res.json({numberOfAvailableSeats: await getCurrentAvailableSeats()});
})

app.get('/reserve_seat', (req, res) => {
  if (!reservationEnabled)
    return (res.json({status: 'Reservation are blocked'}));

  const job = queue.create('reserve_seat').save(function(err) {
    if (err) return (res.json({status: 'Reservation failed'}));

    res.json({status: 'Reservation in process'});
  }).on('complete', function ()  {
    console.log('Seat reservation job %d completed', job.id);
  }).on('failed', function (err) {
    console.log('Seat reservation job %d failed', job.id,  err)
  });
})

app.get('/process', (req, res) => {
  queue.process('reserve_seat', async function(job, done) {
    let seats = await getCurrentAvailableSeats();
    console.log('SEATS BEFORE: ', seats);
    seats--;
    reserveSeat(seats);
    let seats2 = await getCurrentAvailableSeats();
    console.log('SEATS AFTER: ', seats2);
    if (seats >= 0) {
      if (seats === 0)
        reservationEnabled = false;
      else
	done();
    } else
      return done(new Error('Not enough seats available'));
  });
  res.json({status: 'Queue processing'});
})

reserveSeat(3);
