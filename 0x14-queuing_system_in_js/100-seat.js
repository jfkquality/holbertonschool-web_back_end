import redis from 'redis';
const client = redis.createClient();
const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);

function reserveSeat(number) {
  client.set('available_seats', number);
}

async function getCurrentAvailableSeats() {
  return (await getAsync('available_seats'));
}

let reservationEnabled = true;

const kue = require('kue')
, queue = kue.createQueue();

const express = require('express');
const app = express();
const port = 1245;

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})

app.get('/available_seats', (req, res) => {
  res.json({numberOfAvailableSeats: getCurrentAvailableSeats()});
})

app.get('/reserve_seat', (req, res) => {
  if (reservationEnabled === false)
    return (res.json({status: 'Reservation in process'}));

  const job = queue.create('reserve_seat').save(function(err) {
    if (err) return (res.json({status: 'Reservation failed'}));

    res.json({status: 'Reservation in process'});
  });
  job.on('complete', function ()  {
    console.log('Seat reservation job %d completed', job.id);
  }).on('failed', function (err) {
    console.log('Seat reservation job %d failed', job.id,  err)
  });
})

app.get('/process', (req, res) => {
  queue.process('reserve_seat', function(job, done) {
    let seats = getCurrentAvailableSeats();
    seats -= 1;
    reserveSeat(seats);
    if (seats = 0)
      reservationEnabled = false;
    else if (seats >= 0)
      done();
    else
      done(Error('Not enough seats available'));
  });
  res.json({status: 'Queue processing'});
})
