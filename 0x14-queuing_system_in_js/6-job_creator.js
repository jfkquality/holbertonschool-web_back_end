import redis from 'redis';
import kue from 'kue';

const client = redis.createClient();
const queue = kue.createQueue();

const job = queue.create('push_notification_code', {
  phoneNumber: '123-456-7890',
  message: 'Digame',
}).save((err) => {
  if (!err) console.log(`Notification job created: ${ job.id }`);
});

job.on('complete', (result) => {
  console.log('Notification job completed');
}).on('failed', (err) => {
  console.log('Notification job failed');
});
